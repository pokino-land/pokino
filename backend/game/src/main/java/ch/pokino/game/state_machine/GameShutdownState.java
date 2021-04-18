package ch.pokino.game.state_machine;

import java.util.Map;

public class GameShutdownState extends GameState {

    public GameShutdownState(Map<String, Integer> standings) {
        super(standings);
    }

    @Override
    public GameState handleEvent(GameEvent event) {
        // TODO: Not implemented yet.
        return null;
    }
}
