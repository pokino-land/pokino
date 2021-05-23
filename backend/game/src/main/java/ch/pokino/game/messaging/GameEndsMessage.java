package ch.pokino.game.messaging;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public class GameEndsMessage {

    private final String playerId1;
    private final String playerName1;
    private final String playerId2;
    private final String playerName2;
    private final String gameId;

    private final Map<String, Integer> finalStandings;

    public GameEndsMessage(@JsonProperty("playerId1") String playerId1,
                           @JsonProperty("playerName1") String playerName1,
                           @JsonProperty("playerId2") String playerId2,
                           @JsonProperty("playerName2") String playerName2,
                           @JsonProperty("gameId") String gameId,
                           @JsonProperty("finalStandings") Map<String, Integer> finalStandings) {
        this.playerId1 = playerId1;
        this.playerName1 = playerName1;
        this.playerId2 = playerId2;
        this.playerName2 = playerName2;
        this.gameId = gameId;
        this.finalStandings = finalStandings;
    }

    public String getPlayerIdForPlayerName(String playerName) {
        if (this.playerName1.equals(playerName)) {
            return this.playerId1;
        } else if (this.playerName2.equals(playerName)) {
            return this.playerName1;
        }
        throw new RuntimeException("No player matches in the message to the provided playerName");
    }

    public String getWinnerName() {
        if (this.finalStandings.get(playerId1) > this.finalStandings.get(playerId2)) {
            return this.playerName1;
        } else {
            return this.playerName2;
        }
    }

    public Map<String, Integer> getFinalStandings() {
        return finalStandings;
    }

    public String getPlayerId1() {
        return playerId1;
    }

    public String getPlayerId2() {
        return playerId2;
    }

    public String getPlayerName1() {
        return playerName1;
    }

    public String getPlayerName2() {
        return playerName2;
    }

    public String getGameId() {
        return gameId;
    }

    public String toString() {
        return "GameEndsMessage(playerId1=" + playerId1 + ", " + "playerId2=" + playerId2 + ", " + "gameId=" + gameId + ")";
    }
}
