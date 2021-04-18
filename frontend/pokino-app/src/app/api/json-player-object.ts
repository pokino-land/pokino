import {JsonObject} from "./json-object";

export class JsonPlayerObject implements JsonObject {

	public id: number = -1;
	public points: string = '';
	public name: string = '';
	public ready: boolean = false;

	constructor() {}
}
