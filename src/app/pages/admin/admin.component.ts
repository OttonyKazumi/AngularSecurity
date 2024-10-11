import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private _router: Router, private _service: AuthServiceService){}

  home(){
    this._router.navigate(['home'])
  }

  logout(){
    this._service.logout();
  }
}
