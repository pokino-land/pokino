package ch.pokino.game.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class PlayerIsNotFoundInWaitingRoom extends Exception {

    public PlayerIsNotFoundInWaitingRoom(String message) {
        super(message);
    }

}
