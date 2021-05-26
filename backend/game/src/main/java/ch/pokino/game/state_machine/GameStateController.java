package ch.pokino.game.state_machine;

import ch.pokino.game.GameManager;
import ch.pokino.game.utils.GameStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class GameStateController {

    private final GameManager gameManager;
    private final Logger logger = LoggerFactory.getLogger(GameManager.class);

    public GameStateController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    /**
     * Whenever a player threw a ball, he has to issue a request to the backend and inform the game manager that he
     * did hit or miss the pokemon.
     */
    @GetMapping("/game/ballThrown")
    public void pokeHit(@RequestParam String playerId, @RequestParam boolean didHit) {
        this.gameManager.handlePokeHitOrMissRequest(playerId, didHit);
    }

    /**
     * Query the current standings (packed into the GameState object) for a particular game.
     */
    @GetMapping("game/{gameId}/standings")
    public GameStatus getStandings(@PathVariable String gameId) {
        return this.gameManager.getGameStatusFor(gameId);
    }

    /**
     * Once a player has switched into the game play screen, he will inform the backend that he is ready and receive
     * the id of the player that starts the game. If the id matches its own, he can start, otherwise the other player
     * will start (for which the id will match).
     */
    @GetMapping("/game/ready")
    public String confirmStartup(@RequestParam String playerId) {
        this.logger.info("Incoming ready confirmation request from player " + playerId);
        return this.gameManager.handleStartupConfirmationRequest(playerId);
    }
}
