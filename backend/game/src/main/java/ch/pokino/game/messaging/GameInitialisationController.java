package ch.pokino.game.messaging;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin(origins = "*")
public class GameInitialisationController {

    @CrossOrigin(origins = "*", allowedHeaders="Access-Control-Allow-Origin")
    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public GameMessage greeting(HelloMessage message) throws Exception {
        System.out.println("Incoming message: " + message.getName());
        Thread.sleep(250); // simulated delay
        return new GameMessage("id1", "id2");
    }

}
