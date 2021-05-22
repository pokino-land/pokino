import {JsonObject} from "./json-object";

export class JsonWeatherObject implements JsonObject {

	public windSpeedKmh: number = 0;
	public weatherType: string = '';
	public temperature: number = 0;

	constructor() {}
}


