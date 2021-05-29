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
     * A player who is waiting in the waiting room can click ready. He will be removed from the waiting list
     * and added to the ready queue from which he will be matched to other players in the queue.
     */
    @GetMapping("/game/clickReady")
    public void playerClickReady(@RequestParam String playerName, @RequestParam String playerId) throws PlayerIsNotFoundInWaitingRoom {
        this.gameManager.addPlayerToReady(playerName, playerId);
    }

    /**
     * Returns a list of all game statuses (i.e. standings, participating players etc).
     */
    @GetMapping("/game/status")
    public List<GameStatus> getGamesState() {
        return this.gameManager.getGameStatusesAsList();
    }

    /**
     * The points a player needs to win are configured in the backend. One can use this endpoint to query this value.
     */
    @GetMapping("/game/pointsNeededToWin")
    public Integer getPointsNeededToWin() {
        return GameRunningState.POINTS_NEEDED_TO_WIN;
    }

}
