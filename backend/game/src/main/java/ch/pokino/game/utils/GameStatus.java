package ch.pokino.game.utils;

import ch.pokino.game.Game;

import java.util.Map;


/**
 * Value object class to send to frontend to inform about the current status.
 */
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

    public static GameStatus of(Game game) {
        return new GameStatus(game.getGameId(), game.getPlayers().toString(), game.getStandings(), game.getGameStateAsString());
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
