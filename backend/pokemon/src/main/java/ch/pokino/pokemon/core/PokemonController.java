package ch.pokino.pokemon.core;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@CrossOrigin
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

    @GetMapping("/random")
    public Pokemon getRandomPokemon() {
        return this.pokemonService.getRandomPokemon();
    }
}
