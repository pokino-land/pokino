package ch.pokino.game;

import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;

import static java.util.stream.Collectors.toList;

@Component
public class GameManager {

    private final String INIT_MESSAGE_QUEUE_NAME = "init-message-queue";
    private final Queue<Player> waitingPlayers = new ConcurrentLinkedQueue<>();
    private final List<Game> games = new ArrayList<>();

    public String registerPlayer(String playerName) throws PlayerNameNotAvailableException {
        if (!isNameAvailable(playerName)) {
            throw new PlayerNameNotAvailableException("Player name " + playerName + " is already taken.");
        }
        String newPlayerId = createNewPlayerId();
        Player newPlayer = new Player(createNewPlayerId(), playerName);
        synchronized (waitingPlayers) {
            waitingPlayers.add(newPlayer);
            if (waitingPlayers.size() > 1) {
                Player firstPlayer = waitingPlayers.poll();
                Player secondPlayer = waitingPlayers.poll();
                Game newGame = new Game(new Tuple<>(firstPlayer, secondPlayer));
                games.add(newGame);
                writeGameInitMessageOnQueue(newGame);
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
        // TODO: Write on message queue INIT_MESSAGE_QUEUE_NAME
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

    private String createNewPlayerId() {
        return IdCreator.createId();
    }
}
