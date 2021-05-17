package ch.pokino.game;


import org.springframework.web.bind.annotation.*;

import static ch.pokino.game.PlayerIdCreator.createId;

@RestController
@CrossOrigin(origins = "*")
public class GameServiceController {

    private final GameManager gameManager;

    public GameServiceController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @GetMapping(value = "/game/login")
    public String playerLogin(@RequestParam String name) throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        return gameManager.addPlayerToWaiting(new Player(createId(), name));
    }

    @GetMapping("/game/clickReady")
    public void playerClickReady(@RequestParam String playerName, @RequestParam String playerId) {
        gameManager.addPlayerToReady(playerName, playerId);
    }

    @GetMapping("/game/dummy")
    public String dummy() {
        return "Hello";
    }

}


