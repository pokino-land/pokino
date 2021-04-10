package ch.pokino.pokemon;

import ch.pokino.pokemon.config.PokemonApplicationConfig;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;

@SpringBootTest
@Import(PokemonApplicationConfig.class)
class PokemonApplicationTests {

	@Test
	void contextLoads() {
	}

}
