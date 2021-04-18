package ch.pokino.game.messaging;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class MessageConsumer {

    @RabbitListener(queues = RabbitMQConfiguration.QUEUE_NAME)
    public void receiveMessage(final GameMessage message) {
        System.out.println(" [x] Received '" + message.toString() + "'");
    }
}

