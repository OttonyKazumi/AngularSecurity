import { JsonPipe } from '@angular/common';
import { ParseSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isAutenticado: boolean = this.getAuthStatus();
  isGerente: boolean = this.getGerenteStatus();
  isAdmin: boolean = this.getAdminStatus();

  constructor(private _router: Router) {}

  logout(): void{
    localStorage.clear();
    this.setAuthStatus(false, false, false);
    this._router.navigate(['/'])
  }

  login(username: string, password: string){
    if(username && password){
      if(username === 'admin' && password === 'admin'){
        this.setAuthStatus(true, true, true);
        this._router.navigate(['/home']);
        return true;
      }else if(username === 'gerente' && password === 'gerente'){
        this.setAuthStatus(true, true, false);
        this._router.navigate(['/home']);
        return true;
      }else if(username === 'user' && password === 'user'){
        this.setAuthStatus(true, false, false);
        this._router.navigate(['/home']);
        return true;
      }
    }
    return false;
  }

  setAuthStatus(user: boolean, gerente: boolean, admin: boolean){
    this.isAutenticado = user;
    this.isGerente = gerente;
    this.isAdmin = admin;
    localStorage.setItem('authStatus', JSON.stringify(user));
    localStorage.setItem('gerenteStatus', JSON.stringify(gerente));
    localStorage.setItem('adminStatus', JSON.stringify(admin));
  }

  private getAuthStatus(){
    return JSON.parse(localStorage.getItem('authStatus') || 'false');
  }

  private getGerenteStatus(){
    return JSON.parse(localStorage.getItem('gerenteStatus') || 'false');
  }

  private getAdminStatus(){
    return JSON.parse(localStorage.getItem('adminStatus') || 'false');
  }
}
