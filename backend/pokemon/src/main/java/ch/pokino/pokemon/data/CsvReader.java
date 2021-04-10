package ch.pokino.pokemon.data;

import org.springframework.util.ResourceUtils;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class CsvReader {

    public static List<List<String>> readLines(String resourceLocation) {
        InputStream inputStream = CsvReader.class.getResourceAsStream(resourceLocation);
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        return reader.lines().map(CsvReader::getRecordFromLine).collect(Collectors.toList());
    }

    private static List<String> getRecordFromLine(String line) {
        List<String> values = new ArrayList<>();
        try (Scanner rowScanner = new Scanner(line)) {
            rowScanner.useDelimiter(",");
            while (rowScanner.hasNext()) {
                values.add(rowScanner.next());
            }
        }
        return values;
    }

}
