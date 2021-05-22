package ch.pokino.game;


import ch.pokino.game.state_machine.states.GameRunningState;
import ch.pokino.game.state_machine.GameStateMachine;
import ch.pokino.game.state_machine.events.PokeHitEvent;
import ch.pokino.game.state_machine.events.StartupConfirmationEvent;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Set;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

public class GameStateMachineTest {

    private GameStateMachine gameStateMachine;

    @BeforeEach
    public void resetGameStateMachine() {
        Set<String> playerIds = Set.of("0", "1");
        this.gameStateMachine = new GameStateMachine(playerIds);
    }

    @Test
    public void testGameStartupCycle() {
        String gameId = "0";
        assertThat(this.gameStateMachine.getStatusAsString(), equalTo("GameStartupState"));
        this.gameStateMachine.handleGameEvent(new StartupConfirmationEvent("0", gameId));
        assertThat(this.gameStateMachine.getStatusAsString(), equalTo("GameStartupState"));
        this.gameStateMachine.handleGameEvent(new StartupConfirmationEvent("1", gameId));
        assertThat(this.gameStateMachine.getStatusAsString(), equalTo("GameRunningState"));
    }

    @Test
    public void testGameRunningScenario() {
        testGameStartupCycle();
        String gameId = "0";
        this.gameStateMachine.handleGameEvent(new PokeHitEvent("0", gameId));
        assertThat(this.gameStateMachine.getStandings().get("0"), equalTo(1));
        assertThat(this.gameStateMachine.getStandings().get("1"), equalTo(0));
        this.gameStateMachine.handleGameEvent(new PokeHitEvent("0", gameId));
        assertThat(this.gameStateMachine.getStandings().get("0"), equalTo(2));
        assertThat(this.gameStateMachine.getStandings().get("1"), equalTo(0));
        this.gameStateMachine.handleGameEvent(new PokeHitEvent("1", gameId));
        assertThat(this.gameStateMachine.getStandings().get("0"), equalTo(2));
        assertThat(this.gameStateMachine.getStandings().get("1"), equalTo(1));
    }

    @Test
    public void testGameShutsDownWhenAPlayerHasReachedRequiredNumberOfPoints() {
        testGameStartupCycle();
        for (int i = 0; i < GameRunningState.POINTS_NEEDED_TO_WIN; i++) {
            this.gameStateMachine.handleGameEvent(new PokeHitEvent("0", "0"));
        }
        assertThat(this.gameStateMachine.getStandings().get("0"), equalTo(GameRunningState.POINTS_NEEDED_TO_WIN));
        assertThat(this.gameStateMachine.getStandings().get("1"), equalTo(0));
        assertThat(this.gameStateMachine.getStatusAsString(), equalTo("GameShutdownState"));
    }
}
