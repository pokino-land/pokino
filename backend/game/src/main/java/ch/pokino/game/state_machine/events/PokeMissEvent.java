package ch.pokino.game.state_machine.events;

public class PokeMissEvent extends GameEvent {

    public PokeMissEvent(String callerId, String gameId) {
        super(callerId, gameId);
    }
}
