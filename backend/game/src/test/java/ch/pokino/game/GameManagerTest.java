package ch.pokino.game;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class GameManagerTest {

    @Test
    void registerPlayerConsecutivelyInitializesGames() {
        GameManager gameManager = new GameManager();

        assertThat(gameManager.getGames(), is(Matchers.empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), is(Matchers.empty()));

        gameManager.registerPlayer(new Player("0", "Tom"));
        assertThat(gameManager.getGames(), is(empty()));
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(1));

        gameManager.registerPlayer(new Player("1", "Jerry"));
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getWaitingPlayersAsList(), is(empty()));

        gameManager.registerPlayer(new Player("2", "LonelyWolf"));
        assertThat(gameManager.getGames(), iterableWithSize(1));
        assertThat(gameManager.getWaitingPlayersAsList(), iterableWithSize(1));
    }
}
