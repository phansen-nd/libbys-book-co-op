import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router' 

import { AuthService } from '../../core/auth.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/']);
  }

  async signInWithGoogle() {
    await this.authService.googleLogin();
    return await this.afterSignIn();
  }

}
