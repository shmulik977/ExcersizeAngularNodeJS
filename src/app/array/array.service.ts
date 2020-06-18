import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  private arrayUrl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getArray(): Observable<number[]> {
    let res = this.http.get<number[]>(this.arrayUrl+"GetArray");
    return res
  }

  sortArray(): Observable<number[]> {
    let res = this.http.get<number[]>(this.arrayUrl+"SortArray");
    return res
  }

  addNumber(number: any): Observable<any> {
    return this.http.post(this.arrayUrl, { "num": number});
  }
}
