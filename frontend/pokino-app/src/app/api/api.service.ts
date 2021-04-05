import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
	  
	  private accountsUrl: string = 'http://localhost:8000/accounts';
	  
	  public async getAccountsDemo() {
		return this.http.get(this.accountsUrl);
	  }
	  
	  public get(url: string) {
		  return this.http.get(url);
	  }
	  
	  public post(url: string, payload: any) {
		  return this.http.post(url, payload);
	  }
  
}