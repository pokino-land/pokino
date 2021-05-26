package ch.pokino.game.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class PlayerNameNotAvailableException extends Exception {

    public PlayerNameNotAvailableException(String message) {
        super(message);
    }

}
