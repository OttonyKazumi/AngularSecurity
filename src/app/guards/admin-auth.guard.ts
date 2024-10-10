import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if(authService.isAutenticado){
    if(authService.isAdmin){
      return true;
    } else{
      alert("Usuario sem permissão (admin needed)");
      router.navigate(['/home']);
      return false;
    }
  } else {
    console.log('Usuario não autenticado.');
    router.navigate(['/']);
    return false;
  }
};
