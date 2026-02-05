import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Employe } from '../../models/employe/employe.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/shared/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
    private baseUrl = `${environment.baseUrl}users`;

  constructor(private http: HttpClient) {}

  getAllEmployes(): Observable<ApiResponse<Employe[]>> {
    return this.http.get<ApiResponse<Employe[]>>(this.baseUrl);
  }
  
}
