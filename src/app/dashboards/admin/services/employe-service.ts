import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Employe } from '../models/employe.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  private baseUrl = `${environment.baseUrl}users`;

  constructor(private http: HttpClient) {}

  getAllEmployes(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl)
  }


}
  