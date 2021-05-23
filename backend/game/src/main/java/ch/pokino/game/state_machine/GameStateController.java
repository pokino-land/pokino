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

    @PostMapping("/game/hit")
    public void pokeHit(@RequestParam String playerId) {
        this.gameManager.handlePokeHitRequest(playerId);
    }

    @PostMapping("/game/ready")
    public String confirmStartup(@RequestParam String playerId) {
        return this.gameManager.handleStartupConfirmationRequest(playerId);
    }
}
