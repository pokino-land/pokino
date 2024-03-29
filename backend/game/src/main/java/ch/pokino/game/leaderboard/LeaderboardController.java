package ch.pokino.game.leaderboard;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class LeaderboardController {

    LeaderboardApplicationService leaderboardApplicationService;

    /**
     * Returns the complete leaderboard to the frontend ready for rendering.
     */
    @GetMapping(value = "/leaderboard")
    public LeaderboardResponse leaderboard(@RequestParam int topNFilter) {
        return leaderboardApplicationService.getLeaderboardResponse(topNFilter);
    }

}
