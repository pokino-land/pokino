package ch.pokino.game.state_machine;

public abstract class GameEvent {

    private final String callerId;

    public GameEvent(String callerId) {
        this.callerId = callerId;
    }

    public String getCallerId() {
        return callerId;
    }

}
