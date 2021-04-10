package ch.pokino.pokemon.data;

import ch.pokino.pokemon.core.Pokemon;
import ch.pokino.pokemon.core.PokemonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Component
public class DbInitializer implements CommandLineRunner {

    private final PokemonRepository pokemonRepository;

    public DbInitializer(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    private void setupPokemonDb() {
        this.pokemonRepository.deleteAll();
        List<List<String>> csvLines = CsvReader.readLines("/pokemon.csv");
        List<Pokemon> pokemonList = new ArrayList<>();
        for (List<String> line : csvLines.stream().skip(1).collect(Collectors.toList())){
            pokemonList.add(Pokemon.fromCsvLine(line));
        }
        this.pokemonRepository.saveAll(pokemonList);
    }

    @Override
    public void run(String... args) {
        setupPokemonDb();
    }
}
