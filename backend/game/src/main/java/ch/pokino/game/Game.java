package ch.pokino.game;

import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.GameStateMachine;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashSet;
import java.util.Map;
import java.util.Random;
import java.util.Set;


public class Game {

    private final String id;
    private final Tuple<Player, Player> players;

    private String startingPlayerId;

    private final GameStateMachine gameStateMachine;
    private final static Logger LOGGER = LoggerFactory.getLogger(Game.class);
    public Game(Tuple<Player, Player> players) {
        this.id = GameIdCreator.createId();
        this.players = players;
        this.gameStateMachine = new GameStateMachine(getPlayerIds());
        this.setRandomStartingPlayerId();
        LOGGER.info("Initialized new game " + id + " with players " + players + ". Starting player: " + this.startingPlayerId);
    }

    public String getId() {
        return id;
    }

    public String getStartingPlayerId() {
        return startingPlayerId;
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

    private void setRandomStartingPlayerId() {
        Random random = new Random();
        if (random.nextInt(2) == 0) {
            this.startingPlayerId = this.players.first.getId();
        } else {
            this.startingPlayerId = this.players.second.getId();
        }
    }

}
