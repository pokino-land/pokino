package ch.pokino.game.state_machine;

public class StartupConfirmationEvent extends GameEvent {

    public StartupConfirmationEvent(String callerId) {
        super(callerId);
    }

}
