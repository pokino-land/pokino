package ch.pokino.game.leaderboard;

import static ch.pokino.game.leaderboard.LeaderboardResponse.buildFrom;

public class LeaderboardApplicationService {

    PastGameStore pastGameStore;

    public LeaderboardResponse getLeaderboardResponse(int topNFilter) {
        return buildFrom(this.pastGameStore, topNFilter);
    }

}
