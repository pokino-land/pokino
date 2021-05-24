package ch.pokino.game.leaderboard;

import ch.pokino.game.messaging.GameEndsMessage;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PastGameStore {

    private final List<GameEndsMessage> gameEndsMessageList = new ArrayList<>();

    public void addGameEndsMessage(GameEndsMessage gameEndsMessage) {
        this.gameEndsMessageList.add(gameEndsMessage);
    }

    public List<GameEndsMessage> getGameEndsMessageList() {
        return gameEndsMessageList;
    }

}
