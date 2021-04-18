package ch.pokino.game.messaging;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

@Component
public class MessageSender {

    @Autowired
    private final RabbitTemplate template;

    public MessageSender(RabbitTemplate template) {
        this.template = template;
    }

    public void send(GameMessage message) {
        this.template.convertAndSend(RabbitMQConfiguration.QUEUE_NAME, message);
    }
}
