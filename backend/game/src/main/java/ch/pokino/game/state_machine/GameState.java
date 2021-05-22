package ch.pokino.game.state_machine;


import java.util.Map;

public abstract class GameState {

    /**
     * Score standings of a game map from player id to score.
     */
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

    /**
     * Returns a view (copy) of the standings map.
     */
    public Map<String, Integer> getStandings() {
        return Map.copyOf(this.standings);
    }

    /**
     * Returns the class name (without fully qualified package path).
     */
    public String name() {
        return getClass().getSimpleName();
    }
}
