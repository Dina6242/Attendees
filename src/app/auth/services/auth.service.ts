import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  router: Router) { }
  authenticate(res: string): void {
    localStorage.setItem('token', res);
    this.router.navigate(['/homepage']);
  }
}
