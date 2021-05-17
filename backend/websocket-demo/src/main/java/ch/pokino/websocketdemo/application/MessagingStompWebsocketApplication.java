package ch.pokino.websocketdemo.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ch.pokino.websocketdemo.config.WebSocketConfig;

@SpringBootApplication
@Import(WebSocketConfig.class)
@CrossOrigin(origins = "*")
public class MessagingStompWebsocketApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(MessagingStompWebsocketApplication.class, args);
	}

}
