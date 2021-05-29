package ch.pokino.game.messaging;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GameStartsMessage {

    private final String playerId1;
    private final String playerName1;
    private final String playerId2;
    private final String playerName2;

    private final String gameId;
    public GameStartsMessage(@JsonProperty("playerId1") String playerId1,
                             @JsonProperty("playerName1") String playerName1,
                             @JsonProperty("playerId2") String playerId2,
                             @JsonProperty("playerName2") String playerName2,
                             @JsonProperty("gameId") String gameId) {
        this.playerId1 = playerId1;
        this.playerName1 = playerName1;
        this.playerId2 = playerId2;
        this.playerName2 = playerName2;
        this.gameId = gameId;
    }

    public String getPlayerName1() {
        return playerName1;
    }

    public String getPlayerName2() {
        return playerName2;
    }

    public String getPlayerId1() {
        return playerId1;
    }

    public String getPlayerId2() {
        return playerId2;
    }

    public String getGameId() {
        return gameId;
    }

    public String toString() {
        return "GameStartsMessage(playerId1=" + playerId1 + ", " + "playerName1=" + playerName1 + ", "
                + "playerId2=" + playerId2 + ", " + "playerName2=" + playerName2 + ", "
                + "gameId=" + gameId + ")";
    }
}
