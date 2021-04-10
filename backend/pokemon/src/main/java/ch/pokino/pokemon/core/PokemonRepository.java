package ch.pokino.pokemon.core;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PokemonRepository extends CrudRepository<Pokemon, String> {

    Optional<Pokemon> findById(Long id);

}
