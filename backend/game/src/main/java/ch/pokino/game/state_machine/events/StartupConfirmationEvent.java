package ch.pokino.game.state_machine.events;

public class StartupConfirmationEvent extends GameEvent {

    public StartupConfirmationEvent(String callerId, String gameId) {
        super(callerId, gameId);
    }

}
