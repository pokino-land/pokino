package ch.pokino.game.state_machine;


import java.util.Map;

public abstract class GameState {

    Map<String, Integer> standings;

    /**
     * Initializes a new game state. The standings of the game are passed along the states upon creation.
     */
    public GameState(Map<String, Integer> standings) {
        this.standings = standings;
    }

    /**
     * Handles an incoming event and returns the new state based on own state and handled event.
     */
    public abstract GameState handleEvent(GameEvent event);

    public Map<String, Integer> getStandings() {
        return Map.copyOf(this.standings);
    }

    public String name() {
        return getClass().getSimpleName();
    }
}
