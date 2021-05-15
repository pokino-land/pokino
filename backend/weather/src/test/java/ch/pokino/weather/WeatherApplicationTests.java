package ch.pokino.weather;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.annotation.Import;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Import(WeatherConfig.class)
class WeatherApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void randomWeatherEndpointShouldReturnSimplePokinoWeather() {
        PokinoWeather response = this.restTemplate.getForObject("http://localhost:" + port + "/weather/random", PokinoWeather.class);
        assertThat(response.getTemperature(), instanceOf(Double.class));
        assertThat(response.getWindSpeedKmh(), instanceOf(Double.class));
        assertThat(response.getWeatherType(), is(in(List.of("sunny", "cloudy", "rain", "snowfall"))));
    }

}

