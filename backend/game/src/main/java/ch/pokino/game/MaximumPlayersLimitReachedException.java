package ch.pokino.game;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class MaximumPlayersLimitReachedException extends Exception {

    public MaximumPlayersLimitReachedException(String message) {
        super(message);
    }

}
