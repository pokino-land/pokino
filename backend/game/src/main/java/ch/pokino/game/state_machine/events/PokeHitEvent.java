package ch.pokino.game.state_machine.events;

public class PokeHitEvent extends GameEvent {

    public PokeHitEvent(String callerId, String gameId) {
        super(callerId, gameId);
    }
}
