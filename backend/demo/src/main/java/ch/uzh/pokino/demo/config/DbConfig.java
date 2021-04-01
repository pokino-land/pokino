package ch.uzh.pokino.demo.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;


@Configuration
public class DbConfig {
    /**
     * Creates an in-memory "rewards" database populated with test data for fast
     * testing
     */
    @Bean
    public DataSource dataSource() {
        return (new EmbeddedDatabaseBuilder())
                .addScript("classpath:schema.sql")
                .addScript("classpath:data.sql")
                .build();
    }

}
