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
    private final GameManager gameManager;
    private final Logger logger = LoggerFactory.getLogger(GameManager.class);

    public UpstreamDownstreamMessenger(SimpMessagingTemplate simpMessagingTemplate, GameManager gameManager) {
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.gameManager = gameManager;
    }

    /**
     * Forwards the incoming (upstream) websocket messages to the other player who listens for those messages on
     * the downstream queue.
     */
    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    @MessageMapping("/upstream/{gameId}")
    public void listen(@DestinationVariable String gameId, GameStateMessage message) {
//        if (gameManager.getGameById(gameId).getCurrentPlayerId().equals(message.getSendingPlayerId())) {
        logger.info("Game state from game " + gameId + ", player " + message.getSendingPlayerId() + ": ");
        logger.info(message.toString());
        logger.info("===================================");
        this.simpMessagingTemplate.convertAndSend("/queue/downstream/" + gameId, message);
//        }
    }

}
