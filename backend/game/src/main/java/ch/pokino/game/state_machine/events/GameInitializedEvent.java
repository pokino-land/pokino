package ch.pokino.game.state_machine.events;

public class GameInitializedEvent extends GameEvent {

    /**
     * Dummy event without actual data to adhere to the fact that game states need entry events upon creation.
     */
    public GameInitializedEvent(String callerId, String gameId) {
        super(callerId, gameId);
    }

}
