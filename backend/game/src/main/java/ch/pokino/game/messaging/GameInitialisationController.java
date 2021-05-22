package ch.pokino.game.messaging;

import ch.pokino.game.GameManager;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.PriorityQueue;
import java.util.Queue;

@Controller
@CrossOrigin(origins = "*")
public class GameInitialisationController {

//    private final GameManager gameManager;
//    private final Queue<String> names = new PriorityQueue<>();
//
//    public GameInitialisationController(GameManager gameManager) {
//        this.gameManager = gameManager;
//        names.add("Tom");
//        names.add("Jerry");
//    }
//
////    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
////    @MessageMapping("/init")
//    @SendTo("/topic/init")
//    public GameStartsMessage writeGameStartsMessage() throws Exception {
//        if (names.isEmpty()) {
//            throw new RuntimeException();
//        }
//        //String playerId = gameManager.addPlayerToReady(names.poll());
//        return idDefinitionMessageFrom("0");
//    }

}

