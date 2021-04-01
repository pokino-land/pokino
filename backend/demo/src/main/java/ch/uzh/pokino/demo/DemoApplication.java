package ch.uzh.pokino.demo;

import ch.uzh.pokino.demo.config.DbConfig;
import ch.uzh.pokino.demo.config.DemoConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({DemoConfig.class, DbConfig.class})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}