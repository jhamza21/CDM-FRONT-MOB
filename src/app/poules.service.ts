import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoulesService {
  private baseUrl = 'http://196.234.226.229:8099/pool';

  constructor(private http: HttpClient) { }

  GetAllPools(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  DeleteAllPools(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteall`);
  }
  GenererPool(): Observable<any> {
    return this.http.put(`${this.baseUrl}/genererpool`,null);
  }
  GenererPoolP(): Observable<any> {
    return this.http.put(`${this.baseUrl}/genererpoolp`,null);
  }
  GenererPoolG(): Observable<any> {
    return this.http.put(`${this.baseUrl}/genererpoolg`,null);
  }
  GenererPoolS(): Observable<any> {
    return this.http.put(`${this.baseUrl}/genererpools`,null);
  }
  GenererPoolF(): Observable<any> {
    return this.http.put(`${this.baseUrl}/genererpoolf`,null);
  }


}
