package ch.pokino.game.messaging;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MessageSender {

    @Autowired
    private final RabbitTemplate template;

    public MessageSender(RabbitTemplate template) {
        this.template = template;
    }

    public void send(String queueName, String message) {
        this.template.convertAndSend(queueName, message);
    }
}
