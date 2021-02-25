import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormationsComponent } from './components/formations/formations.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { Error404Component } from './components/error404/error404.component';
import { SurveyComponent } from './components/survey/survey.component';



const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "formations",  canActivate: [AuthGuard], component: FormationsComponent },
  { path: "login", component: LoginComponent},
  { path: "survey", component: SurveyComponent},
  { path: "dashboard", canActivate: [AdminGuard],component: AdminHomeComponent},
  { path: "signup", component: SignupComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
