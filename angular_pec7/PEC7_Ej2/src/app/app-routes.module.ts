import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


import { LoginComponent } from './user/login/login.component';
import { RegisterComponent} from './user/register/register.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //ruta predeterminada para redirigir a la página de inicio de sesión
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'wine/list', component: WineListComponent }, 
  { path: 'wine/create', component: WineNewComponent,
  canActivate: [AuthGuard] }, 
  { path: 'wine/:id', component: WineDetailComponent}, //Una nueva ruta para cargar los detalles de un wine
  { path: '**', redirectTo: '/register' } ///ruta general que redirige a la página de registro
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }