import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { GerenteComponent } from './pages/gerente/gerente.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { gerenteAuthGuard } from './guards/gerente-auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: AdminComponent, canActivate: [adminAuthGuard]},
    {path: 'gerente', component: GerenteComponent, canActivate: [gerenteAuthGuard]},
    {path: 'profile', component: ProfileComponent, canActivate: [authGuard]}
];
