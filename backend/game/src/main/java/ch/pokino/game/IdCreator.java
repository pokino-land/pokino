package ch.pokino.game;


import java.util.concurrent.atomic.AtomicLong;

public class IdCreator {

    private static final AtomicLong atomicCounter = new AtomicLong();

    public static String createId() {
        return String.valueOf(atomicCounter.getAndIncrement());
    }
}
