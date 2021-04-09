package ch.uzh.pokino.demo;

import ch.uzh.pokino.demo.db_init.CsvReader;
import org.junit.jupiter.api.Test;

import java.io.FileNotFoundException;
import java.util.List;

import static ch.uzh.pokino.demo.db_init.CsvReader.readLines;

public class CsvReaderTest {

    @Test
    void readLinesReturnsLines() throws FileNotFoundException {
        List<List<String>> lines = CsvReader.readLines();
        for (List<String> line : lines) {
            System.out.println(line);
        }
    }

}
