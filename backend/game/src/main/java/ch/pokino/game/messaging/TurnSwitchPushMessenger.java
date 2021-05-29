package ch.pokino.game.messaging;

import ch.pokino.game.GameManager;
import ch.pokino.game.utils.GameStatus;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
public class TurnSwitchPushMessenger {

    private final SimpMessagingTemplate simpMessagingTemplate;
    private final Logger logger = LoggerFactory.getLogger(TurnSwitchPushMessenger.class);

    public TurnSwitchPushMessenger(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    /**
     * Forwards the incoming (upstream) websocket messages to the other player who listens for those messages on
     * the downstream queue.
     */
    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    public void sendTurnSwitchMessage(String gameId, GameStatus standings) {
        String destination = "/topic/switch/" + gameId;
        logger.info("Switching players in game " + gameId + ". Destination: " + destination);
        this.simpMessagingTemplate.convertAndSend(destination, standings);
    }

}
