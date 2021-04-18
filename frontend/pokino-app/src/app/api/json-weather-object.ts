import {JsonObject} from "./json-object";

export class JsonWeatherObject implements JsonObject {

	public wind: WeatherWind = new WeatherWind();
	public clouds: number = 0;

	constructor() {}

	public static fromJSON(data: any): JsonWeatherObject {
		const weather: JsonWeatherObject = new JsonWeatherObject();
		weather.wind = WeatherWind.fromJSON(data.wind);
		weather.clouds = data.clouds.all;
		return weather;
	}
}

class WeatherWind {
	public speed: number = 0;
	public deg: number = 0;

	constructor() {}

	public static fromJSON(data: any): WeatherWind {
		const wind: WeatherWind = new WeatherWind();
		wind.speed = data.speed;
		wind.deg = data.deg;
		return wind;
	}
}