package ch.pokino.game.state_machine;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;


public class GameStateMachine {

    private GameState state;

    public GameStateMachine(Set<String> playerIds) {
        Map<String, Integer> standings = new HashMap<>();
        for (String playerId : playerIds) {
            standings.put(playerId, 0);
        }
        this.state = new GameStartupState(standings);
    }

    /**
     * Handling of a game event is passed through to the actual game state object which knows how to deal
     * with the particular event.
     */
    public void handleGameEvent(GameEvent event) {
        state = state.handleEvent(event);
    }

    public Map<String, Integer> getStandings() {
        return this.state.getStandings();
    }

    public String getStatusAsString() {
        return this.state.name();
    }

}
