package ch.uzh.pokino.demo.config;

import ch.uzh.pokino.demo.db_init.CsvReader;
import ch.uzh.pokino.demo.pokemon.JpaBasedPokemonRepository;
import ch.uzh.pokino.demo.pokemon.Pokemon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.Entity;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;


@Component
public class DbInitializer {

    @Autowired
    JpaBasedPokemonRepository pokemonRepository;


    private void setupPokemonDb() throws FileNotFoundException {
        List<List<String>> csvLines = CsvReader.readLines();
        List<Pokemon> pokemonList = new ArrayList<>();
        for (List<String> line : csvLines){
            pokemonList.add(new Pokemon());
        }
    }
}
