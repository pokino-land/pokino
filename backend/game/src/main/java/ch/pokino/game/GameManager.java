package ch.pokino.game;

import ch.pokino.game.messaging.GameStartsMessage;
import ch.pokino.game.messaging.GameStartsPushMessenger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;

import static java.util.stream.Collectors.toList;

@Component
public class GameManager {

    private final GameStartsPushMessenger gameStartsPushMessenger;
    private final Map<String, Player> waitingPlayers = new ConcurrentHashMap<>();
    private final Queue<Player> readyPlayers = new ConcurrentLinkedQueue<>();
    private final List<Game> games = new ArrayList<>();
    public static final int MAXIMUM_NUMBER_OF_PLAYERS_ALLOWED = 1000;
    private final Logger logger = LoggerFactory.getLogger(GameManager.class);

    public GameManager(GameStartsPushMessenger gameStartsPushMessenger) {
        this.gameStartsPushMessenger = gameStartsPushMessenger;
    }

    public String addPlayerToWaiting(Player player) throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        if (!isNameAvailable(player.getName())) {
            throw new PlayerNameNotAvailableException("Player name " + player.getName() + " is already taken.");
        }
        if (getTotalNumberOfPlayers() >= MAXIMUM_NUMBER_OF_PLAYERS_ALLOWED) {
            throw new MaximumPlayersLimitReachedException("Maximum number of players "
                    + MAXIMUM_NUMBER_OF_PLAYERS_ALLOWED + " reached. Currently: " + getTotalNumberOfPlayers());
        }
        synchronized (waitingPlayers) {
            waitingPlayers.put(player.getId(), player);
        }
        logger.info("Added new player to waiting list: " + player);
        return player.getId();
    }

    public void addPlayerToReady(String playerName, String playerId)  {
        synchronized (readyPlayers) {
            if (!waitingPlayers.values().stream().map(Player::getName).collect(toList()).contains(playerName)) {
                throw new RuntimeException("Provided player name is not in waiting list.");
            }
            if (!waitingPlayers.values().stream().map(Player::getId).collect(toList()).contains(playerId)) {
                throw new RuntimeException("Provided player id is not in waiting list.");
            }
            Player player = waitingPlayers.get(playerId);
            if (!player.getName().equals(playerName)) {
                throw new RuntimeException("Provided PlayerName does not match registered one.");
            }
            waitingPlayers.remove(playerId);
            readyPlayers.add(player);
            logger.info("Added new ready player: " + player);
            if (readyPlayers.size() > 1) {
                Player firstPlayer = readyPlayers.poll();
                Player secondPlayer = readyPlayers.poll();
                Game newGame = new Game(new Tuple<>(firstPlayer, secondPlayer));
                games.add(newGame);
                writeGameStartsMessageOnWebsocket(newGame);
            }
        }
    }

    /**
     * When a new game with two participating players has been initialized, this function writes an event on the
     * game init queue to inform two players in the frontend that they have been matched and can now enter the game.
     * @param game a new game for which we write a message
     */
    private void writeGameStartsMessageOnWebsocket(Game game) {
        var playerTuple = game.getPlayers();
        gameStartsPushMessenger.sendGameStartsMessage(new GameStartsMessage(playerTuple.first.getId(), playerTuple.second.getId(), game.getId()));
    }

    public List<Game> getGames() {
        return Collections.unmodifiableList(games);
    }

    public List<Player> getWaitingPlayersAsList() {
        return List.copyOf(waitingPlayers.values());
    }

    public List<Player> getPlayingPlayersAsList() {
        List<Tuple<Player, Player>> gamesPlayerTuples = games.stream().map(Game::getPlayers).collect(toList());
        List<Player> playingPlayers = new ArrayList<>();
        for (Tuple<Player, Player> playerTuple : gamesPlayerTuples) {
            playingPlayers.add(playerTuple.first);
            playingPlayers.add(playerTuple.second);
        }
        return List.copyOf(playingPlayers);
    }

    private boolean isNameAvailable(String name) {
        List<Player> waitingPlayers = getWaitingPlayersAsList();
        List<Player> playingPlayers = getPlayingPlayersAsList();
        boolean nameExistsInWaitingPlayers = (waitingPlayers.stream().map(Player::getName).anyMatch(existingName -> existingName.equals(name)));
        boolean nameExistsInPlayingPlayers = (playingPlayers.stream().map(Player::getName).anyMatch(existingName -> existingName.equals(name)));
        return !(nameExistsInWaitingPlayers || nameExistsInPlayingPlayers);
    }

    private int getTotalNumberOfPlayers() {
        List<Player> playingPlayersAsList = getPlayingPlayersAsList();
        List<Player> waitingPlayersAsList = getWaitingPlayersAsList();
        return waitingPlayersAsList.size() + playingPlayersAsList.size();
    }

}
