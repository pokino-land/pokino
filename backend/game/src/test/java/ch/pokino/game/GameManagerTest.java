package ch.pokino.game;

import ch.pokino.game.application.GameApplication;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest(classes = GameApplication.class)
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public class GameManagerTest {

    @Autowired
    GameManager gameManager;

    @Test
    void registerPlayerConsecutivelyInitializesGames() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException{
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

        gameManager.addPlayerToReady("Tom", "0");
        gameManager.addPlayerToReady("Jerry", "1");
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getGames().stream().findFirst().orElse(null).getPlayerIds(), containsInAnyOrder("0", "1"));
    }

    @Test
    void registerPlayerTwiceThrowsPlayerNameNotAvailableException() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        gameManager.addPlayerToWaiting(new Player("1", "Tom"));
        Exception exception = assertThrows(PlayerNameNotAvailableException.class, () -> gameManager.addPlayerToWaiting(new Player("1", "Tom")));
        assertThat(exception.getMessage(), is("Player name Tom is already taken."));
    }
}
