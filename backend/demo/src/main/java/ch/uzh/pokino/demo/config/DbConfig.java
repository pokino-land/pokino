package ch.uzh.pokino.demo.config;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;

/**
 * Configuration class for Persistence-specific objects, including profile
 * choices for JPA via Hibernate or JPA via EclipseLink. Only used by tests in
 * this class (since Spring Boot cannot be assumed).
 * <p>
 * To simulate Spring Boot we load <code>application.properties</code> manually,
 * if it exists, and mimic Boot's <code>spring.jpa.show-sql</code> property.
 */
@Configuration
public class DbConfig {
    /**
     * Creates an in-memory "rewards" database populated with test data for fast
     * testing
     */
    @Bean
    public DataSource dataSource() {
        return (new EmbeddedDatabaseBuilder()) //
                .addScript("classpath:schema.sql") //
                .addScript("classpath:data.sql").build();
    }

}
