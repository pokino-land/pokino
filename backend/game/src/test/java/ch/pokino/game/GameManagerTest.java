package ch.pokino.game;

import ch.pokino.game.application.GameApplication;
import ch.pokino.game.exceptions.MaximumPlayersLimitReachedException;
import ch.pokino.game.exceptions.PlayerIsNotFoundInWaitingRoom;
import ch.pokino.game.exceptions.PlayerNameNotAvailableException;
import ch.pokino.game.player.Player;
import ch.pokino.game.state_machine.events.PokeHitEvent;
import ch.pokino.game.state_machine.states.GameShutdownState;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import java.util.HashMap;

import static java.util.stream.Collectors.toList;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest(classes = GameApplication.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class GameManagerTest {

    @Autowired
    GameManager gameManager;

    @Test
    void registerPlayerConsecutivelyInitializesGames() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException, PlayerIsNotFoundInWaitingRoom {
        assertThat(gameManager.getGames(), is(Matchers.empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), is(Matchers.empty()));

        Player tom = new Player("Tom");
        gameManager.addPlayerToWaiting(tom);
        assertThat(gameManager.getGames(), is(empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(1));
        assertThat(gameManager.getWaitingPlayersAsList().stream().findFirst().orElse(null), equalTo(tom));

        Player jerry = new Player("Jerry");
        gameManager.addPlayerToWaiting(jerry);
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(2));

        gameManager.addPlayerToReady(tom.getName(), tom.getId());
        gameManager.addPlayerToReady(jerry.getName(), jerry.getId());
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getGames().stream().map(Game::getPlayerIds).collect(toList()).get(0), containsInAnyOrder(tom.getId(), jerry.getId()));
    }

    @Test
    void registerPlayerTwiceThrowsPlayerNameNotAvailableException() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        gameManager.addPlayerToWaiting(new Player("1", "Tom"));
        Exception exception = assertThrows(PlayerNameNotAvailableException.class, () -> gameManager.addPlayerToWaiting(new Player("1", "Tom")));
        assertThat(exception.getMessage(), is("Player name Tom is already taken."));
    }

    @Test
    void gameIsBeingTakenDownWhenGameStateChangesToShutdownAndPlayersAreAddedToWaitingList() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException, PlayerIsNotFoundInWaitingRoom {
        gameManager.addPlayerToWaiting(new Player("Tom"));
        gameManager.addPlayerToWaiting(new Player("Jerry"));
        gameManager.addPlayerToReady("Tom", "0");
        gameManager.addPlayerToReady("Jerry", "1");
        gameManager.handleGameStateChanged(new GameShutdownState(new HashMap<>(), new PokeHitEvent("0", "0")));

        assertThat(gameManager.getGames().size(), equalTo(0));
        assertThat(gameManager.getWaitingPlayersAsList().stream().map(Player::getName).collect(toList()),
                containsInAnyOrder("Tom", "Jerry"));
    }


}
