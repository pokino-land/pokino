package ch.pokino.game.state_machine;

import ch.pokino.game.GameManager;
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

    @GetMapping("/game/ballThrown")
    public void pokeHit(@RequestParam String playerId, @RequestParam boolean didHit) {
        this.gameManager.handlePokeHitOrMissRequest(playerId, didHit);
    }

//    @GetMapping("game/{gameId}/standings")
//    public GameStandings getStandings(@PathVariable String gameId) {
//        // TODO(matt): Return the game status such that frontend can request it before every turn.
//    }

    @GetMapping("/game/ready")
    public String confirmStartup(@RequestParam String playerId) {
        this.logger.info("Incoming ready confirmation request from player " + playerId);
        return this.gameManager.handleStartupConfirmationRequest(playerId);
    }
}
