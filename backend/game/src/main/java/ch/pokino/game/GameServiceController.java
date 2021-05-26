package ch.pokino.game;


import ch.pokino.game.exceptions.MaximumPlayersLimitReachedException;
import ch.pokino.game.exceptions.PlayerIsNotFoundInWaitingRoom;
import ch.pokino.game.exceptions.PlayerNameNotAvailableException;
import ch.pokino.game.player.Player;
import ch.pokino.game.state_machine.states.GameRunningState;
import ch.pokino.game.utils.GameStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static ch.pokino.game.player.PlayerIdCreator.createId;

@RestController
@CrossOrigin(origins = "*")
public class GameServiceController {

    private final GameManager gameManager;

    public GameServiceController(GameManager gameManager) {
        this.gameManager = gameManager;
    }

    /**
     * A player logs into the waiting room to chill there and check the leaderboard or set himself to ready state.
     */
    @GetMapping(value = "/game/login")
    public String playerLogin(@RequestParam String name) throws PlayerNameNotAvailableException, MaximumPlayersLimitReachedException {
        return this.gameManager.addPlayerToWaiting(new Player(createId(), name));
    }

    /**
     *
     */
    @GetMapping("/game/clickReady")
    public void playerClickReady(@RequestParam String playerName, @RequestParam String playerId) throws PlayerIsNotFoundInWaitingRoom {
        this.gameManager.addPlayerToReady(playerName, playerId);
    }

    @GetMapping("/game/status")
    public List<GameStatus> getGamesState() {
        return this.gameManager.getGameStatusesAsList();
    }

    @GetMapping("/game/pointsNeededToWin")
    public Integer getPointsNeededToWin() {
        return GameRunningState.POINTS_NEEDED_TO_WIN;
    }

}
