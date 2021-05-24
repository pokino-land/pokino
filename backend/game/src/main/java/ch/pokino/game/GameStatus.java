package ch.pokino.game;

import java.util.Map;

public class GameStatus {

    private final String gameId;
    private final String players;
    private final Map<String, Integer> standings;
    private final String gameState;

    public GameStatus(String gameId, String players, Map<String, Integer> standings, String gameState) {
        this.gameId = gameId;
        this.players = players;
        this.standings = standings;
        this.gameState = gameState;
    }


    public String getGameId() {
        return gameId;
    }

    public String getPlayers() {
        return players;
    }

    public Map<String, Integer> getStandings() {
        return standings;
    }

    public String getGameState() {
        return gameState;
    }

}
