package ch.pokino.game.state_machine;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

public class GameRunningState extends GameState {

    private static final Integer MAX_SCORE_TO_WIN = 5;  // whoever gets this first, wins

    public GameRunningState(Map<String, Integer> standings) {
        super(standings);
    }

    @Override
    public GameState handleEvent(GameEvent event) {
        if (event instanceof PokeHitEvent) {
            Map<String, Integer> newStandings = new HashMap<>(standings);
            newStandings.put(event.getCallerId(), standings.get(event.getCallerId()) + 1);

            if (getMaxScore(newStandings).equals(MAX_SCORE_TO_WIN)) {
                return new GameShutdownState(newStandings);
            } else {
                return new GameRunningState(newStandings);
            }
        }
        return this;
    }

    private static Integer getMaxScore(Map<String, Integer> standings) {
        return standings.values().stream().mapToInt(v -> v).max().orElseThrow(NoSuchElementException::new);
    }

}
