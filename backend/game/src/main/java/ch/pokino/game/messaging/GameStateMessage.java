package ch.pokino.game.messaging;

public class GameStateMessage {

    private final Ball ball;
    private final Pokemon pokemon;
    private final Score score;

    public Ball getBall() {
        return ball;
    }

    public Pokemon getPokemon() {
        return pokemon;
    }

    public Score getScore() {
        return score;
    }


    public GameStateMessage(Ball ball, Pokemon pokemon, Score score) {
        this.ball = ball;
        this.pokemon = pokemon;
        this.score = score;
    }

    static class Ball {
        private final int x;
        private final int y;

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }

        public Ball(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public String toString() {
            return "Ball(x=" + this.x + ", y=" + this.y + ")";
        }
    }

    static class Pokemon {
        private final int x;
        private final int y;
        private final String name;
        private final boolean isHit;

        public Pokemon(int x, int y, String name, boolean isHit) {
            this.x = x;
            this.y = y;
            this.name = name;
            this.isHit = isHit;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }

        public String getName() {
            return name;
        }

        public boolean isHit() {
            return isHit;
        }
    }

    static class Score {
        private final String playerId1;
        private final String playerId2;

        public String getPlayerId2() {
            return playerId2;
        }

        public String getPlayerId1() {
            return playerId1;
        }

        public Score(String playerId1, String playerId2) {
            this.playerId1 = playerId1;
            this.playerId2 = playerId2;
        }
    }

}
