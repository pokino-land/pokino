package ch.pokino.weather;

import java.util.List;
import java.util.Random;

public final class PokinoWeather {

    private final double windSpeedKmh;
    private final String weatherType;
    private final double temperature;

    private static final double minWindSpeed = 0.0;
    private static final double maxWindSpeed = 10.0;
    private static final double minTemperature = -10.0;
    private static final double maxTemperature = 30.0;
    private static List<String> weatherTypes = List.of("sunny", "cloudy", "precipitation");

    public PokinoWeather(double windSpeedKmh, String weatherType, double temperature) {
        this.windSpeedKmh = windSpeedKmh;
        this.weatherType = weatherType;
        this.temperature = temperature;
    }

    public double getWindSpeedKmh() {
        return windSpeedKmh;
    }

    public String getWeatherType() {
        return weatherType;
    }

    public double getTemperature() {
        return temperature;
    }

    public static PokinoWeather randomWeatherResponse() {
        Random random = new Random();
        double windSpeedKmh = minWindSpeed + random.nextFloat() * (maxWindSpeed - minWindSpeed);
        double temperature = minTemperature + random.nextFloat() * (maxTemperature - minTemperature);
        String weatherType = weatherTypes.get(random.nextInt(weatherTypes.size()));
        if (weatherType.equals("precipitation")) {
            if (temperature <= 0.0) {
                weatherType = "snowfall";
            } else {
                weatherType = "rain";
            }
        }
        return new PokinoWeather(windSpeedKmh, weatherType, temperature);
    }
}
