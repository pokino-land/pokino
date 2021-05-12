package ch.pokino.game;

import ch.pokino.game.application.GameApplication;
import ch.pokino.game.config.GameApplicationConfig;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
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
    @Disabled
    void registerPlayerConsecutivelyInitializesGames() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException{
        assertThat(gameManager.getGames(), is(Matchers.empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), is(Matchers.empty()));

        gameManager.registerPlayer("Tom");
        assertThat(gameManager.getGames(), is(empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(1));

        gameManager.registerPlayer("Jerry");
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getWaitingPlayersAsList(), is(empty()));

        gameManager.registerPlayer("LonelyWolf");
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(1));
    }

    @Test
    void registerPlayerTwiceThrowsPlayerNameNotAvailableException() throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        gameManager.registerPlayer("Tom");
        Exception exception = assertThrows(PlayerNameNotAvailableException.class, () -> gameManager.registerPlayer("Tom"));
        assertThat(exception.getMessage(), is("Player name Tom is already taken."));
    }
}
