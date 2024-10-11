import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {

  constructor(private _router: Router, private _service: AuthServiceService){}

  home(){
    this._router.navigate(['home'])
  }

  logout(){
    this._service.logout();
  }

}
