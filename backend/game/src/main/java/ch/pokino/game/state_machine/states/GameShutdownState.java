package ch.pokino.game.state_machine.states;

import ch.pokino.game.state_machine.events.GameEvent;

import java.util.Map;

public class GameShutdownState extends GameState {

    public GameShutdownState(Map<String, Integer> standings, GameEvent entryEvent) {
        super(standings, entryEvent);
    }

    @Override
    public GameState handleEvent(GameEvent event) {
        // TODO: Not implemented yet.
        return null;
    }
}
