export interface LoginRequest {
    email: string;
    motDePasse: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
}

export interface CustomJwtPayload {
    sub: string;
    role: 'ADMIN' | 'EMPLOYE';
    iat: number;
    exp: number;
}