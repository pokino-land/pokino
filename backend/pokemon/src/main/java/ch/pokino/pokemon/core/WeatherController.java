package ch.pokino.pokemon.core;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;

@CrossOrigin
@RestController
public class WeatherController {

    private static final String DEFAULT_CITY = "zurich";
    private static final String API_KEY = "04ae6cf4f0e767314ffc49e6d32d7db0";
    private static final int CACHE_TIME_UNTIL_NEXT_CALL_IN_MINUTES = 1;
    Logger logger = LoggerFactory.getLogger(WeatherController.class);

    private ResponseEntity<String> cachedWeatherResponse;
    private LocalDateTime lastCallDateTime;

    public WeatherController() {
        updateCachedWeather();
    }

    @GetMapping("/weather")
    public ResponseEntity<String> getCurrentWeatherEndpoint() {
        return getCurrentWeather();
    }

    private ResponseEntity<String> makeOpenWeatherApiCall() {
        RestTemplate restTemplate = new RestTemplate();
        UriComponents uriComponents = UriComponentsBuilder
                .newInstance()
                .scheme("http")
                .host("api.openweathermap.org/data/2.5/weather")
                .path("")
                .query("q={keyword}&appid={appid}")
                .buildAndExpand(DEFAULT_CITY, API_KEY);
        String uri = uriComponents.toUriString();
        return restTemplate.exchange(uri, HttpMethod.GET, null, String.class);
    }

    private void updateCachedWeather() {
        cachedWeatherResponse = makeOpenWeatherApiCall();
        lastCallDateTime = LocalDateTime.now();
    }

    private ResponseEntity<String> getCurrentWeather() {
        if (lastCallDateTime.until(LocalDateTime.now(), ChronoUnit.MINUTES) >= CACHE_TIME_UNTIL_NEXT_CALL_IN_MINUTES) {
            updateCachedWeather();
            logger.info("Updated weather cache!");
        } else {
            logger.info("Using cached weather data.");
        }

        return cachedWeatherResponse;
    }

}
