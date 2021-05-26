package ch.pokino.game.state_machine;

import ch.pokino.game.state_machine.states.GameState;

public interface GameStateChangeListener {

    void handleGameStateChanged(GameState newGameState);

}
