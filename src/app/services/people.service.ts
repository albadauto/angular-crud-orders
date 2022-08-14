import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiURL: string = environment.API_URL;
  apiPeopleUrl: string = `${this.apiURL}/user`
  constructor(private http: HttpClient) { }

  createPeople(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiPeopleUrl}/createUser`, user);
  }
}
