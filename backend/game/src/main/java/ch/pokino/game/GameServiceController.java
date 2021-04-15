package ch.pokino.game;


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

    @PostMapping("/game/clickReady/{id}/{name}")
    public void playerClickReady(@PathVariable String id, @PathVariable String name) {
        gameManager.registerPlayer(new Player(id, name));
    }

}
