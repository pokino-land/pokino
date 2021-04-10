package ch.uzh.pokino.demo.pokemon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PokemonService {

    @Autowired
    private JpaBasedPokemonRepository pokemonRepository;

    public List<Pokemon> getAllPokemon() {
        List<Pokemon> allPokemon = new ArrayList<>();
        pokemonRepository.findAll().forEach(allPokemon::add);
        return allPokemon;
    }

    public Optional<Pokemon> getPokemon(String id) {
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
