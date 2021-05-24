package ch.pokino.game.state_machine;

import ch.pokino.game.GameManager;
import ch.pokino.game.application.GameApplication;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@SpringBootTest(classes = GameApplication.class)
@AutoConfigureMockMvc
class GameStateControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private GameManager gameManagerMock;

    @Test
    @Disabled("TODO: Need tof figure out correct mocking.")
    void pokeHitShouldReturn() throws Exception {
        // when(gameManagerMock.handlePokeHitRequest("0")).then(doNothing());
        this.mockMvc
                .perform(get("/game/pokeHit"))
                .andExpect(status().isOk());

    }

}
