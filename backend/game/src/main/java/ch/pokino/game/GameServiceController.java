package ch.pokino.game;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class GameServiceController {

    private final GameManager gameManager;

    public GameServiceController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @PostMapping("/game/login/{name}")
    public String playerLogin(@PathVariable String name) throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        return gameManager.registerPlayer(name);
    }

    @PostMapping("/game/clickReady/{name}")
    public void playerClickReady(@PathVariable String name) {

    }

}
