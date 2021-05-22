package ch.pokino.game.state_machine;

import java.util.HashMap;
import java.util.Map;

public class GameStartupState extends GameState {

    Map<String, Boolean> isConfirmed;

    public GameStartupState(Map<String, Integer> standings) {
        super(standings);
        this.isConfirmed = new HashMap<>();
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
            return new GameRunningState(standings);
        } else {
            return this;
        }
    }
}
