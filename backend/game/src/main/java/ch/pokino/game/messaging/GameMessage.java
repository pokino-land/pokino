package ch.pokino.game.messaging;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GameMessage {

    private final String id1;
    private final String id2;

    public GameMessage(@JsonProperty("id1") String id1, @JsonProperty("id2") String id2) {
        this.id1 = id1;
        this.id2 = id2;
    }

    public String getId1() {
        return id1;
    }

    public String getId2() {
        return id2;
    }

    public String toString() {
        return "GameMessage(id1=" + id1 + ", " + "id2=" + id2 + ")";
    }
}
