import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly router = inject(Router);
  readonly currentUser$ = new BehaviorSubject<boolean>(false);

  auth(): void {
    this.currentUser$.next(true);
    localStorage.setItem('user', 'true');
    this.router.navigate(['/']);
  }

  logout(): void {
    this.currentUser$.next(false);
    localStorage.clear();
    this.router.navigate(['login']);
  }
}