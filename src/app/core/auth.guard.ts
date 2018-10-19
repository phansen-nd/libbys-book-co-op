import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService,
              private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.user.pipe(
        take(1),
        map(user => !!user),
        tap(loggedIn => {
          if(!loggedIn) {
            console.log("Access denied.");
            this.router.navigate(['/login']);
          } else {
            console.log("Access granted.");
          }
        })
      )
    }
  
}
