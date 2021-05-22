package ch.pokino.game.messaging;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;


@Component
public class GameEndsPushMessenger {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public GameEndsPushMessenger(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    public void sendGameEndsMessage(GameEndsMessage message) {
        this.simpMessagingTemplate.convertAndSend("/topic/shutdown", message);
    }

}
