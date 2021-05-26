package ch.pokino.game.leaderboard;

import ch.pokino.game.messaging.GameEndsMessage;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

public class LeaderboardResponse {

    private final List<LeaderboardEntry> leaderboardEntries;

    private LeaderboardResponse(List<LeaderboardEntry> leaderboardEntries) {
        this.leaderboardEntries = leaderboardEntries;
    }

    public static LeaderboardResponse buildFrom(PastGameStore pastGameStore, int topNFilter) {

        List<LeaderboardEntry> leaderboardEntries = new ArrayList<>();
        final List<GameEndsMessage> gameEndsMessageList = pastGameStore.getGameEndsMessageList();

        Set<String> uniquePlayerNames = gameEndsMessageList.stream()
                .flatMap(message -> List.of(message.getPlayerName1(), message.getPlayerName2()).stream())
                .collect(Collectors.toSet());

        for (String playerName : uniquePlayerNames) {
            int numberOfWins = 0;
            int numberOfLosses = 0;
            int numberOfPokeHits = 0;
            int numberOfPokeMisses = 0;
            for (GameEndsMessage message : gameEndsMessageList) {
                if (playerName.equals(message.getWinnerName())) {
                    numberOfWins += 1;
                } else {
                    numberOfLosses += 1;
                }
                if (message.getNames().contains(playerName)) {
                    if (message.isFirstPlayer(message.getPlayerIdForPlayerName(playerName))) {
                        numberOfPokeHits += message.getPlayer1Hits();
                        numberOfPokeMisses += message.getPlayer1Misses();
                    } else {
                        numberOfPokeHits += message.getPlayer2Hits();
                        numberOfPokeMisses += message.getPlayer2Misses();
                    }
                }
            }
            leaderboardEntries.add(
                    new LeaderboardEntry(playerName, numberOfWins, numberOfLosses, numberOfPokeHits, numberOfPokeMisses)
            );
        }

        if (topNFilter > leaderboardEntries.size()) {
            leaderboardEntries = leaderboardEntries.stream().limit(topNFilter).collect(toList());
        }

        return new LeaderboardResponse(leaderboardEntries);
    }

    public List<LeaderboardEntry> getLeaderboardEntries() {
        return leaderboardEntries;
    }

    public static class LeaderboardEntry {

        private final String playerName;
        private final int gamesWon;
        private final int gamesLost;
        private final int numberOfPokeHits;
        private final int numberOfPokeMisses;

        public LeaderboardEntry(String playerName, int gamesWon, int gamesLost, int numberOfPokeHits, int numberOfPokeMisses) {
            this.playerName = playerName;
            this.gamesWon = gamesWon;
            this.gamesLost = gamesLost;
            this.numberOfPokeHits = numberOfPokeHits;
            this.numberOfPokeMisses = numberOfPokeMisses;
        }

        public String getPlayerName() {
            return playerName;
        }

        public int getGamesWon() {
            return gamesWon;
        }

        public int getGamesLost() {
            return gamesLost;
        }

        public int getNumberOfPokeHits() {
            return numberOfPokeHits;
        }

        public int getGetNumberOfPokeMisses() {
            return numberOfPokeMisses;
        }

    }

}
