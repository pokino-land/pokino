package ch.pokino.game.state_machine;

import ch.pokino.game.GameManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GameStateController {

    private final GameManager gameManager;

    public GameStateController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @PostMapping("/game/hit/{id}")
    public void pokeHit(@PathVariable String playerId) {
        this.gameManager.handlePokeHitRequest(playerId);
    }

    @PostMapping("/game/ready/{id}")
    public void confirmStartup(@PathVariable String playerId) {
        this.gameManager.handleStartupConfirmationRequest(playerId);
    }
}
