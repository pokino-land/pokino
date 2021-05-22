package ch.pokino.game;


import ch.pokino.game.state_machine.states.GameRunningState;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        return this.gameManager.addPlayerToWaiting(new Player(createId(), name));
    }

    @GetMapping("/game/clickReady")
    public void playerClickReady(@RequestParam String playerName, @RequestParam String playerId) {
        this.gameManager.addPlayerToReady(playerName, playerId);
    }

    @GetMapping("/game/status")
    public List<GameStatus> getGamesState() {
        return this.gameManager.getGameStatuses();
    }

    @GetMapping("/game/pointsNeededToWin")
    public Integer getPointsNeededToWin() {
        return GameRunningState.POINTS_NEEDED_TO_WIN;
    }

}


