package ch.pokino.game;

import ch.pokino.game.state_machine.states.GameState;

public interface GameStateChangeListener {

    void handleGameStateChanged(GameState newGameState);

}
