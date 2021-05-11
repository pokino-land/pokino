package ch.pokino.game.messaging;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GameInitialisationController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")

    public GameMessage
    greeting(HelloMessage message) throws Exception {
        System.out.println("Incoming message: " + message);
        Thread.sleep(250); // simulated delay
        return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }

}
