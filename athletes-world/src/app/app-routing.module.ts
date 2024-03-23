import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { CanActivate } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'login', canActivate: [AuthGuard], component: LoginComponent},
  {path: 'register', canActivate: [AuthGuard], component: RegisterComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
