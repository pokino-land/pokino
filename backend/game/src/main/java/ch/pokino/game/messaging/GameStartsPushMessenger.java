package ch.pokino.game.messaging;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class GameStartsPushMessenger {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public GameStartsPushMessenger(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    public void sendGameStartsMessage(GameStartsMessage message) {
        this.simpMessagingTemplate.convertAndSend("/topic/init", message);
    }

}
