package ch.pokino.game.messaging;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "*")
public class GameInitialisationController {

    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    @MessageMapping("/pokino/gameState")
    // @SendTo("/topic/init")
    public void listen(String message) {
        System.out.println(message);
    }

}
