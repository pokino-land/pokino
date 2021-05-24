package ch.pokino.game.state_machine.events;

public abstract class GameEvent {

    private final String callerId;
    private final String gameId;

    public GameEvent(String callerId, String gameId) {
        this.callerId = callerId;
        this.gameId = gameId;
    }

    public String getCallerId() {
        return callerId;
    }

    public String getGameId() {
        return gameId;
    }

}
