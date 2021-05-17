package ch.pokino.pokemon.core;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import static java.util.stream.Collectors.toList;

@Service
public class PokemonService {

    private final PokemonRepository pokemonRepository;
    @Value("#{'${pokemon-filter-names}'.split(',')}")
    private List<String> pokemonFilterNames;
    private String nameOfLastRandomPokemonReturned;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
        this.nameOfLastRandomPokemonReturned = "";
    }

    /**
     * Returns all Pokemon which can be found in our database.
     */
    public List<Pokemon> getAllPokemon() {
        List<Pokemon> allPokemon = new ArrayList<>();
        pokemonRepository.findAll().forEach(allPokemon::add);
        return allPokemon;
    }

    /**
     * Returns a random pokemon from the list of pokemon which are defined by pokemonFilterNames.
     * Note: This function never yields the same pokemon twice in a row.
     */
    public Pokemon getRandomPokemon() {
        List<Pokemon> allPokemon = getAllPokemon();
        List<Pokemon> filteredPokemon = allPokemon.stream().filter(p -> pokemonFilterNames.contains(p.getName())).collect(toList());
        int namesSampleSize = filteredPokemon.size();

        Random random = new Random();
        if (!nameOfLastRandomPokemonReturned.isEmpty()) {
            filteredPokemon = filteredPokemon.stream().filter(p -> !p.getName().equals(nameOfLastRandomPokemonReturned)).collect(toList());
            namesSampleSize -= 1;
        }
        Pokemon randomPokemon = filteredPokemon.get(random.nextInt(namesSampleSize));
        nameOfLastRandomPokemonReturned = randomPokemon.getName();

        return randomPokemon;
    }

    /**
     * Simply returns the pokemon with a certain database id. We do not filter based on pokemonFilterNames here.
     */
    public Optional<Pokemon> getPokemon(Long id) {
        return pokemonRepository.findById(id);
    }

}
