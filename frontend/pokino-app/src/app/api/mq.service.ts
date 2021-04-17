import {JsonObject} from "./json-object";


export class MqService {

    amqp: any = require('amqplib/callback_api');

    public sendMessage(msg: JsonObject): void {
        this.amqp.connect('amqp://localhost', (error0: Error, connection: any): void => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1: Error, channel: any): void => {
                if (error1) {
                    throw error1;
                }
                const queue = 'gameStateQueue';

                channel.assertQueue(queue, {
                    durable: false
                });

                channel.sendToQueue(queue, Buffer.from(msg));
                console.log("sent message " + msg.toString());
            });
            setTimeout((): void => {
                connection.close();
                process.exit(0);
            }, 500);
        });
    }

    onInit(): void {
        this.amqp.connect('amqp://localhost', (error0: Error, connection: any): void => {
            if (error0) {
                throw error0;
            }
            connection.createChannel((error1: Error, channel: any): void => {
                if (error1) {
                    throw error1;
                }

                const queue = 'gameStateQueue';

                channel.assertQueue(queue, {
                    durable: false
                });

                console.log("Waiting for messages in %s. To exit press CTRL+C", queue);

                channel.consume(queue, (msg: any): string => {
                    console.log("Received %s", msg.content.toString());
                    return msg.content.toString();
                }, {
                    noAck: true
                });
            });
        });
    }

}
