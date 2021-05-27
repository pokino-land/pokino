package ch.pokino.game;

import ch.pokino.game.player.Player;
import ch.pokino.game.state_machine.GameStateChangeListener;
import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.GameStateMachine;
import ch.pokino.game.utils.Tuple;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;


public class Game {

    private final String id;
    private final Tuple<Player, Player> players;
    private Map<String, Integer> hitCounts;
    private Map<String, Integer> missCounts;

    private String startingPlayerId;
    private String currentPlayerId;

    private final GameStateMachine gameStateMachine;
    private final static Logger LOGGER = LoggerFactory.getLogger(Game.class);
    public Game(Tuple<Player, Player> players) {
        this.id = GameIdCreator.createId();
        this.players = players;
        this.gameStateMachine = new GameStateMachine(getPlayerIds());
        this.setRandomStartingPlayerId();
        this.currentPlayerId = this.startingPlayerId;
        this.hitCounts = Map.of(players.first.getId(), 0, players.second.getId(), 0);
        this.missCounts = Map.of(players.first.getId(), 0, players.second.getId(), 0);
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

    public void registerHit(String playerId) {
        this.hitCounts.put(playerId, this.hitCounts.get(playerId) + 1);
    }

    public void registerMiss(String playerId) {
        this.missCounts.put(playerId, this.missCounts.get(playerId) + 1);
    }

    public int getNumberOfHitsForPlayer(String playerId) {
        return this.hitCounts.get(playerId);
    }

    public int getNumberOfMissesForPlayer(String playerId) {
        return this.missCounts.get(playerId);
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

    public void toggleCurrentPlayerId() {
        if (this.currentPlayerId.equals(this.players.first.getId())) {
            this.currentPlayerId = this.players.second.getId();
        } else if (this.currentPlayerId.equals(this.players.second.getId())) {
            this.currentPlayerId = this.players.first.getId();
        } else {
            throw new RuntimeException("Invalid current player id.");
        }
    }

    public String getCurrentPlayerId() {
        return this.currentPlayerId;
    }

    public String toString() {
        return "Game( " + players.first + ", " + players.second + ")";
    }
}
