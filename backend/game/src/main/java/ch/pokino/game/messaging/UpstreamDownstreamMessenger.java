package ch.pokino.game.messaging;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;


@Component
public class UpstreamDownstreamMessenger {

    public UpstreamDownstreamMessenger(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    private final SimpMessagingTemplate simpMessagingTemplate;

    /**
     * Forwards the incoming (upstream) websocket messages to the other player who listens for those messages on
     * the downstream queue.
     */
    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    @MessageMapping("/queue/{gameId}/upstream")
    @SendTo("/queue/{gameId}/downstream")
    public void listen(String message) {
        // TODO: Maybe we need a little more logic here to validate who's turn it is etc. or is that all in frontend?
        this.simpMessagingTemplate.convertAndSend("/queue/{gameId}/downstream", message);
    }

}
