import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router'
import { UserLoginComponent } from './users/user-login/user-login.component'
import { AuthGuard } from './core/auth.guard';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/userProfile', pathMatch:'full'},
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
