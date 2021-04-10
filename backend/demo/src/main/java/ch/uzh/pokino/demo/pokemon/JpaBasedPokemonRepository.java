package ch.uzh.pokino.demo.pokemon;

import org.springframework.data.repository.CrudRepository;


public interface JpaBasedPokemonRepository extends CrudRepository<Pokemon, String> {

}
