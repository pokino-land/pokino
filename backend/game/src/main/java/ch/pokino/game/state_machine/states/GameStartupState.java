package ch.pokino.game.state_machine.states;

import ch.pokino.game.state_machine.events.GameEvent;
import ch.pokino.game.state_machine.events.StartupConfirmationEvent;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class GameStartupState extends GameState {

    Map<String, Boolean> isConfirmed;

    public GameStartupState(Map<String, Integer> standings, GameEvent entryEvent) {
        super(standings, entryEvent);
        this.isConfirmed = new ConcurrentHashMap<>();
        for (String playerId : standings.keySet()) {
            this.isConfirmed.put(playerId, false);
        }
    }

    @Override
    public GameState handleEvent(GameEvent event) {
        if (event instanceof StartupConfirmationEvent) {
            isConfirmed.put(event.getCallerId(), true);
        }
        if (isConfirmed.values().stream().allMatch(v -> v)) {
            return new GameRunningState(standings, event);
        } else {
            return this;
        }
    }
}
