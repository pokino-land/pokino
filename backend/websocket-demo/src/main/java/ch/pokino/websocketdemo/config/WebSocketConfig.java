package ch.pokino.websocketdemo.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
@ComponentScan("ch.pokino.websocketdemo")
@CrossOrigin(origins = "*")
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    private static final String STOMP_ENDPOINT_NAME = "/pokino-websocket";
    private static final String DESTINATION_PREFIX = "/topic";

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker(DESTINATION_PREFIX);
        config.setApplicationDestinationPrefixes("/pokino");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/pokino-websocket").setAllowedOrigins("http://localhost:4200");
    }
}
