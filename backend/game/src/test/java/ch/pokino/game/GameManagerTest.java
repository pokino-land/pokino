package ch.pokino.game;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class GameManagerTest {

    @Test
    void registerPlayerConsecutivelyInitializesGames() throws PlayerNameNotAvailableException{
        GameManager gameManager = new GameManager();

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
    void registerPlayerTwiceThrowsPlayerNameNotAvailableException() throws PlayerNameNotAvailableException {
        GameManager gameManager = new GameManager();

        gameManager.registerPlayer("Tom");
        Exception exception = assertThrows(PlayerNameNotAvailableException.class, () -> gameManager.registerPlayer("Tom"));
        assertThat(exception.getMessage(), is("Player name Tom is already taken."));
    }
}
