import {JsonObject} from "./json-object";

export class JsonWeatherObject implements JsonObject {

	public wind: WeatherWind = new WeatherWind();
	public clouds: number = 0;
	public location: string = '';

	constructor() {}

	public static fromJSON(data: any): JsonWeatherObject | null {
		try {
			const weather: JsonWeatherObject = new JsonWeatherObject();
			weather.clouds = data.clouds.all;
			weather.wind = data.wind;
			weather.location = data.name;
			return weather;
		} catch (err) {
			console.error('Weather object initialisation failed, probably faulty JSON:');
			console.error(err);
			return null;
		}
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
