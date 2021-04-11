export class JsonObject {

	public accountNumber: string;
	public name: string;

	constructor(accountNumber: string, name: string) {
		this.accountNumber = accountNumber;
		this.name = name;
	}

	/***
	 * extracts the needed data from a generic object and transforms it to a JsonObject for clean typed processing
	 * @param object: a generic object in json format retrieved from the API
	 */
	public static fromObject(object: any): JsonObject {
		return new JsonObject(object.number, object.name);
	}
}
