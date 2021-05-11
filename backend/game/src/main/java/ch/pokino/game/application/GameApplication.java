package ch.pokino.game.application;

import ch.pokino.game.GameApplicationConfig;
import ch.pokino.game.config.WebSocketConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@Import({WebSocketConfig.class, GameApplicationConfig.class})
@CrossOrigin(origins = "*")
public class GameApplication {

	public static void main(String[] args) {
		SpringApplication.run(GameApplication.class, args);
	}

	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/pokino-websocket").allowedOrigins("*");
				registry.addMapping("/").allowedOrigins("*");
				registry.addMapping("/topic").allowedOrigins("*");
				registry.addMapping("/gs-guide-websocket").allowedOrigins("*");
			}
		};
	}
}
