package ch.pokino.websocketdemo.application;

import ch.pokino.websocketdemo.config.WebSocketConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@SpringBootApplication
@Import({WebSocketConfig.class})
@CrossOrigin(origins = "*")
public class MessagingStompWebsocketApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(MessagingStompWebsocketApplication.class, args);
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
