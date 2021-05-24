package ch.pokino.game.messaging;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
public class UpstreamDownstreamMessenger {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public UpstreamDownstreamMessenger(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    /**
     * Forwards the incoming (upstream) websocket messages to the other player who listens for those messages on
     * the downstream queue.
     */
    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    @MessageMapping("/upstream/{gameId}")
    public void listen(@DestinationVariable String gameId, GameStateMessage message) {
        System.out.println("Game state from + " + gameId + ": ");
        System.out.println(message);
        System.out.println("===================================");
        this.simpMessagingTemplate.convertAndSend("/queue/downstream/" + gameId, message);
    }

}
