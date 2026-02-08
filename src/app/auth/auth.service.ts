import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { LoginRequest, AuthResponse, ApiResponse, CustomJwtPayload } from './auth.model';
import { environment } from '../../environments/environment';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.baseUrl}auth`;

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<ApiResponse<AuthResponse>> {
    return this.http.post<ApiResponse<AuthResponse>>(`${this.baseUrl}/login`, request);
    // .pipe(
    //   map((response) => response.data),
    //   tap((tokens) => {
    //     this.saveTokens(tokens.accessToken, tokens.refreshToken);
    //   }),
    // );
  }

  saveTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getUserRole(token: string): string | null {
    if (!token) return null;

    const decoded = jwtDecode<CustomJwtPayload>(token);
    return decoded.role;
  }
}
