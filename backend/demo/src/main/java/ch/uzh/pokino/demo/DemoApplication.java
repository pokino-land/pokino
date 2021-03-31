package ch.uzh.pokino.demo;

import ch.uzh.pokino.demo.config.DbConfig;
import ch.uzh.pokino.demo.config.DemoConfig;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
@Import({DemoConfig.class, DbConfig.class})
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(JdbcTemplate jdbcTemplate){

		String QUERY = "SELECT count(*) FROM T_ACCOUNT";

		// Use Lambda expression to display the result
		return args -> System.out.println("Hello, there are "
				+ jdbcTemplate.queryForObject(QUERY, Long.class)
				+ " accounts");
	}
}