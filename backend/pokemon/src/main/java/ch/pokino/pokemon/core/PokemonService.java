package ch.pokino.pokemon.core;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class PokemonService {

    private final PokemonRepository pokemonRepository;

    public PokemonService(PokemonRepository pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }

    public List<Pokemon> getAllPokemon() {
        List<Pokemon> allPokemon = new ArrayList<>();
        pokemonRepository.findAll().forEach(allPokemon::add);
        return allPokemon;
    }

    public Pokemon getPokemonFilteredByName(List<String> names) {
        List<Pokemon> allPokemon = getAllPokemon();
        Random random = new Random();
        List<Pokemon> filteredPokemon = allPokemon.stream().filter(p -> names.contains(p.getName())).collect(Collectors.toList());
        return filteredPokemon.get(random.nextInt(filteredPokemon.size()));
    }

    public Optional<Pokemon> getPokemon(Long id) {
        return pokemonRepository.findById(id);
    }

    public void addPokemon(Pokemon pokemon) {
        pokemonRepository.save(pokemon);
    }

    public void updatePokemon(String id, Pokemon pokemon) {
        pokemonRepository.save(pokemon);
    }

    public void deletePokemon(String id) {
        pokemonRepository.deleteById(id);
    }

}
