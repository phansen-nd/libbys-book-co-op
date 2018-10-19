import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router'
import { UserLoginComponent } from './users/user-login/user-login.component'
import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { HomeComponent } from './content/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'userProfile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: UserLoginComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
