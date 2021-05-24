package ch.pokino.game.state_machine.states;

import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.events.PokeHitEvent;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

public class GameRunningState extends GameState {

    public static final Integer POINTS_NEEDED_TO_WIN = 5;  // whoever gets this first, wins

    public GameRunningState(Map<String, Integer> standings, GameEvent entryEvent) {
        super(standings, entryEvent);
    }

    @Override
    public GameState handleEvent(GameEvent event) {
        if (event instanceof PokeHitEvent) {
            Map<String, Integer> newStandings = new HashMap<>(standings);
            newStandings.put(event.getCallerId(), standings.get(event.getCallerId()) + 1);

            if (getMaxScore(newStandings).equals(POINTS_NEEDED_TO_WIN)) {
                return new GameShutdownState(newStandings, event);
            } else {
                return new GameRunningState(newStandings, event);
            }
        }
        return this;
    }

    private static Integer getMaxScore(Map<String, Integer> standings) {
        return standings.values().stream().mapToInt(v -> v).max().orElseThrow(NoSuchElementException::new);
    }

}
