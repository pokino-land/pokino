package ch.pokino.game;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Game {

    private final static Logger LOGGER = LoggerFactory.getLogger(Game.class);
    private final Tuple<Player, Player> players;
    private final String id;

    enum GameState {
        STARTED

    }

    private GameState state;

    public Game(Tuple<Player, Player> players) {
        this.players = players;
        this.id = GameIdCreator.createId();
        this.state = GameState.STARTED;
        LOGGER.info("Initialized new game " + id + " with players " + players);
    }

    public Tuple<Player, Player> getPlayers() {
        return players;
    }

    public String toString() {
        return "Game( " + players.first + ", " + players.second + ")";
    }

}
