package ch.pokino.game;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Game {

    private final static Logger LOGGER = LoggerFactory.getLogger(Game.class);

    enum GameState {
        STARTED
    }

    private Tuple<Player, Player> players;
    private GameState state;

    public Game(Tuple<Player, Player> players) {
        this.players = players;
        this.state = GameState.STARTED;
        LOGGER.info("Initialized new game with players " + players);
    }

    public Tuple<Player, Player> getPlayers() {
        return players;
    }
}
