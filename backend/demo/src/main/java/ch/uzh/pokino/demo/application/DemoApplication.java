package ch.uzh.pokino.demo.application;

import ch.uzh.pokino.demo.config.DbConfig;
import ch.uzh.pokino.demo.config.DemoConfig;
import ch.uzh.pokino.demo.db_init.CsvReader;
import ch.uzh.pokino.demo.pokemon.Pokemon;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@Import({DemoConfig.class})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}