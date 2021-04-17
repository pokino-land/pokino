package ch.pokino.game;


import java.util.concurrent.atomic.AtomicLong;

public class PlayerIdCreator {

    private static final AtomicLong atomicCounter = new AtomicLong();

    public static String createId() {
        return String.valueOf(atomicCounter.getAndIncrement());
    }
}
