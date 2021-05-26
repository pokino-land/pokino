package ch.pokino.game.state_machine;

import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.events.GameInitializedEvent;
import ch.pokino.game.state_machine.states.GameStartupState;
import ch.pokino.game.state_machine.states.GameState;

import java.util.*;


public class GameStateMachine {

    private GameState state;
    private final List<GameStateChangeListener> listeners = new ArrayList<>();

    public GameStateMachine(Set<String> playerIds) {
        Map<String, Integer> standings = new HashMap<>();
        for (String playerId : playerIds) {
            standings.put(playerId, 0);
        }
        this.state = new GameStartupState(standings, new GameInitializedEvent(null, null));
    }

    /**
     * Handling of a game event is passed through to the actual game state object which knows how to deal
     * with the particular event.
     */
    public void handleGameEvent(GameEvent event) {
        GameState newGameState = this.state.handleEvent(event);
        if (!newGameState.name().equals(this.state.name())) {
            informListenersAboutGameStateChange(newGameState);
        }
        this.state = newGameState;
    }

    public Map<String, Integer> getStandings() {
        return this.state.getStandings();
    }

    public String getStatusAsString() {
        return this.state.name();
    }

    public GameState getGameState() {
        return this.state;
    }

    public void registerGameStateChangedListeners(GameStateChangeListener listener) {
        this.listeners.add(listener);
    }

    private void informListenersAboutGameStateChange(GameState newGameState) {
        for (GameStateChangeListener listener : this.listeners) {
            listener.handleGameStateChanged(newGameState);
        }
    }

}
