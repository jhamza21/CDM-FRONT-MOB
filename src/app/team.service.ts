import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://196.234.226.229:8099/team';

  constructor(private http: HttpClient) { }

  GetAllTeams(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
  DetailsTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/details/${id}`);
  }


  CreateTeam(value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`,value);
  }

  UpdateTeam(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  DeleteTeam(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
  DeleteAllTeams(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteall`);
  }


  Goal_Conceded(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Goal_Conceded`);
  }


  Goal_Scored(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Goal_Scored`);
  }


}
