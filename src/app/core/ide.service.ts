import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Program {
  id: number;
  number: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class IdeService {

  IDE_API_SERVER = "https://api.judge0.com";
  constructor(private httpClient: HttpClient) { }

  createPolicy(program: Program): Observable<Program> {
    return this.httpClient.post<Program>(`${this.IDE_API_SERVER}`, Program);
  }

  sProg() {

  }
}
