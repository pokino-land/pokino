package ch.pokino.game;

import org.springframework.stereotype.Component;

import java.util.*;
import java.util.concurrent.ConcurrentLinkedQueue;

@Component
public class GameManager {

    private final Queue<Player> waitingPlayers = new ConcurrentLinkedQueue<>();
    private final List<Game> games = new ArrayList<>();

    public void registerPlayer(Player newPlayer) {
        synchronized (waitingPlayers) {
            waitingPlayers.add(newPlayer);
            if (waitingPlayers.size() > 1) {
                Player firstPlayer = waitingPlayers.poll();
                Player secondPlayer = waitingPlayers.poll();
                Game newGame = new Game(new Tuple<>(firstPlayer, secondPlayer));
                games.add(newGame);
                // TODO write message on queue for both players
            }
        }
    }

    public List<Game> getGames() {
        return Collections.unmodifiableList(games);
    }

    public List<Player> getWaitingPlayersAsList() {
        return List.copyOf(waitingPlayers);
    }



}
