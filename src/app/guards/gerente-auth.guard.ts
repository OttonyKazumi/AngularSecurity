import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { inject } from '@angular/core';

export const gerenteAuthGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);
  
  if(authService.isAutenticado){
    if(authService.isGerente){
      return true;
    } else {
      alert("Usuario sem permissão (gerente/admin needed)");
      router.navigate(['/home']);
      return false
    }
  } else {
    console.log('Usuario não autenticado');
    router.navigate(['/login']);
    return false;
  }
};
