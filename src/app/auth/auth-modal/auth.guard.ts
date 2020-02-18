import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthModalService } from './auth-modal.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authModalService: AuthModalService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authModalService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home/start']);
      setTimeout(() => {
        this.authModalService.show();
      }, 50);

      return false;
    }
  }
}
