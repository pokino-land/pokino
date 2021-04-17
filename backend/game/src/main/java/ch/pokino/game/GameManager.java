package ch.pokino.game;

import ch.pokino.game.messaging.MessageSender;
import com.fasterxml.jackson.core.JsonFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;

import static java.util.stream.Collectors.toList;

@Component
public class GameManager {

    private final Queue<Player> waitingPlayers = new ConcurrentLinkedQueue<>();
    private final List<Game> games = new ArrayList<>();
    private final MessageSender sender;
    private final Logger logger = LoggerFactory.getLogger(GameManager.class);

    public GameManager(MessageSender sender) {
        this.sender = sender;
    }

    public String registerPlayer(String playerName) throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        if (!isNameAvailable(playerName)) {
            throw new PlayerNameNotAvailableException("Player name " + playerName + " is already taken.");
        }
        if (getTotalNumberOfPlayers() >= 2) {
            throw new MaximumPlayersLimitReachedException("Maximum number of players reached. Currently: " + getTotalNumberOfPlayers());
        }
        String newPlayerId = createNewPlayerId();
        Player newPlayer = new Player(newPlayerId, playerName);
        logger.info("Registered new player: " + newPlayer);

        synchronized (waitingPlayers) {
            waitingPlayers.add(newPlayer);
            if (waitingPlayers.size() > 1) {
                Player firstPlayer = waitingPlayers.poll();
                Player secondPlayer = waitingPlayers.poll();
                Game newGame = new Game(new Tuple<>(firstPlayer, secondPlayer));
                games.add(newGame);
                writeGameInitMessageOnQueue(newGame);
                logger.info("Created new game: " + newGame);
            }
        }
        return newPlayerId;
    }

    /**
     * When a new game with two participating players has been initialized, this function writes an event on the
     * game init queue to inform two players in the frontend that they have been matched and can now enter the game.
     * @param game a new game for which we write a message
     */
    private void writeGameInitMessageOnQueue(Game game) {
        String message = "new_game: " + game.getPlayers().first + ", " + game.getPlayers().second;
        this.sender.send(Common.GAME_QUEUE_NAME, message);
    }

    public List<Game> getGames() {
        return Collections.unmodifiableList(games);
    }

    public List<Player> getWaitingPlayersAsList() {
        return List.copyOf(waitingPlayers);
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

    private String createNewPlayerId() {
        return PlayerIdCreator.createId();
    }
}
