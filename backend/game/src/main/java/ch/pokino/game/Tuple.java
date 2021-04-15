package ch.pokino.game;

public class Tuple<X, Y> {
    public final X first;
    public final Y second;

    public Tuple(X first, Y second) {
        this.first = first;
        this.second = second;
    }

    public String toString() {
        return String.format("Tuple(%s, %s)", first.toString(), second.toString());
    }
}