package ch.pokino.pokemon.core;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/pokemon")
public class PokemonController {

    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/all")
    public Iterable<Pokemon> getAllPokemon() {
        return this.pokemonService.getAllPokemon();
    }

    @GetMapping("/{id}")
    public Optional<Pokemon> getPokemon(@PathVariable Long id) {
        return this.pokemonService.getPokemon(id);
    }

}
