import {JsonObject} from "./json-object";

export class JsonPlayerObject implements JsonObject {

	public id: string = '';
	public points: string = '';
	public name: string = '';
	public ready: boolean = false;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}
