package ch.pokino.game;

import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.GameStateMachine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashSet;
import java.util.Map;
import java.util.Set;


public class Game {

    private final String id;
    private final Tuple<Player, Player> players;
    private final GameStateMachine gameStateMachine;
    private final static Logger LOGGER = LoggerFactory.getLogger(Game.class);

    public Game(Tuple<Player, Player> players) {
        this.id = GameIdCreator.createId();
        this.players = players;
        this.gameStateMachine = new GameStateMachine(getPlayerIds());
        LOGGER.info("Initialized new game " + id + " with players " + players);
    }

    public String getId() {
        return id;
    }

    public void handleGameEvent(GameEvent event) {
        gameStateMachine.handleGameEvent(event);
    }

    public Tuple<Player, Player> getPlayers() {
        return players;
    }

    public Set<String> getPlayerIds() {
        Set<String> idSet = new HashSet<>();
        var players = getPlayers();
        idSet.add(players.first.getId());
        idSet.add(players.second.getId());
        return idSet;
    }

    public String toString() {
        return "Game( " + players.first + ", " + players.second + ")";
    }

    public String getGameId() {
        return id;
    }

    public Map<String, Integer> getStandings() {
        return this.gameStateMachine.getStandings();
    }

    public String getGameStateAsString() {
        return this.gameStateMachine.getStatusAsString();
    }

    public void registerGameStateChangeListener(GameStateChangeListener listener) {
        this.gameStateMachine.registerGameStateChangedListeners(listener);
    }

}
