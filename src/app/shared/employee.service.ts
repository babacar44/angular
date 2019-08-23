import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    formData : Employee
    constructor(private httpClient: HttpClient) { }

    API_KEY = 'http://127.0.0.1:8000';
public list():Observable<any>{
    return this.httpClient.get<any[]>(`${this.API_KEY}/api/posts`);
  }


  postEmployee(formData : Employee){

  }
}
