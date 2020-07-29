import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private baseUrl = 'http://196.234.226.229:8099/match';

  constructor(private http: HttpClient) { }
  GetAllMatchs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  DetailsMatch(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }
  DeleteAllMatchs(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteall`);
  }
  UpdateMatch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }
  UpdateMatchPool(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatep/${id}`, value);
  }
  Updatepeno(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatepeno/${id}`, value);
  }


}
