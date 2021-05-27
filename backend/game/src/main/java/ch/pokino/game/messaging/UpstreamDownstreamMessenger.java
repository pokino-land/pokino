package ch.pokino.game.messaging;

import ch.pokino.game.GameManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
public class UpstreamDownstreamMessenger {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final Logger logger = LoggerFactory.getLogger(GameManager.class);

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
//            logger.info("Game state from + " + gameId + ": ");
//            logger.info(message.toString());
//            logger.info("===================================");
        this.simpMessagingTemplate.convertAndSend("/queue/downstream/" + gameId, message);
    }

}
