package ch.pokino.game.state_machine;

import ch.pokino.game.GameManager;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class GameStateController {

    private final GameManager gameManager;

    public GameStateController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @GetMapping("/game/hit")
    public void pokeHit(@RequestParam String playerId) {
        this.gameManager.handlePokeHitRequest(playerId);
    }

    @GetMapping("/game/ready")
    public String confirmStartup(@RequestParam String playerId) {
        System.out.println("Incoming ready confirmation request from player " + playerId);
        return this.gameManager.handleStartupConfirmationRequest(playerId);
    }
}
