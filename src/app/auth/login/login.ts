import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // email: string = '';
  // motDePasse: string = '';
  loginRequest: LoginRequest = {
    email: '',
    motDePasse: '',
  };
  msg: string = '';

  // constructor(private authService: AuthService) {}
  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          const { accessToken, refreshToken } = response.data;
          this.authService.saveTokens(accessToken, refreshToken);

          // Rediriger en fonction du rôle
          const role = this.authService.getUserRole(accessToken);
          if (role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (role === 'EMPLOYE') {
            this.router.navigate(['/employe']);
          }
        }
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
