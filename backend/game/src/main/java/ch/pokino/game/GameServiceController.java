package ch.pokino.game;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class GameServiceController {

    private GameManager gameManager;

    public GameServiceController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    @PostMapping("/game/login/{name}")
    public String playerLogin(@PathVariable String name) throws PlayerNameNotAvailableException {
        return gameManager.registerPlayer(name);
    }

    @PostMapping("/game/clickReady/{name}")
    public void playerClickReady(@PathVariable String name) {

    }

}
