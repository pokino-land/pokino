package ch.pokino.pokemon;

import ch.pokino.pokemon.config.PokemonApplicationConfig;
import ch.pokino.pokemon.core.Pokemon;
import ch.pokino.pokemon.core.PokemonService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;


import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasSize;

@SpringBootTest
@Import(PokemonApplicationConfig.class)
class PokemonServiceTest {

	@Autowired
	PokemonService pokemonService;

	@Test
	void getPokemonRandomFilteredByNameDoesNotYieldSamePokemonTwice() {
		Pokemon lastPokemon = this.pokemonService.getRandomPokemon();
		for (int i=0; i<100; i++) {
			Pokemon currentPokemon = this.pokemonService.getRandomPokemon();
			assert(!currentPokemon.getName().equals(lastPokemon.getName()));
			lastPokemon = currentPokemon;
		}
	}

	@Test
	void getAllPokemonReturnsAListOf800Pokemon() {
		List<Pokemon> allPokemon = this.pokemonService.getAllPokemon();
		assertThat(allPokemon, hasSize(800));
	}

}
