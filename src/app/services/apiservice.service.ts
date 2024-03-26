import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { alumno } from '../interfaces/midb';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };  
    apiURL = "http://10.10.40.167:3000";


  constructor(private http: HttpClient) { }

  getAlumnos():Observable<any>{
    return this.http.get<alumno>('https://nancyB3a.github.io/PGY4121/datosTAV2022.json')
  }
 
}