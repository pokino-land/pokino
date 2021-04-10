import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonObject } from './json-object';


@Injectable()
export class ApiService {
	constructor(private http: HttpClient) {}

	private accountsUrl = 'http://localhost:8000/accounts';
	public async getAccountsDemo() {
		const g: any = (await this.http.get(this.accountsUrl));
		console.log(g.toString());
		return g;
	}

	public get(url: string): JsonObject {
		return JsonObject.fromObject(this.http.get(url));
	}

	public post(url: string, payload: any): JsonObject {
		return JsonObject.fromObject(this.http.post(url, payload));
	}

}
