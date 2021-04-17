package ch.pokino.game.messaging;

import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;


@Component
public class MessageReceiver {

    @RabbitHandler
    public void receive(String message) {
        System.out.println(" [RabbitMQ] Received '" + message + "'");
    }
}
