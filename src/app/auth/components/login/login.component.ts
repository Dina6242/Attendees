import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin = new FormGroup({
    phone: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private loginService: LoginService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const userDetails = this.formLogin.value;
    this.loginService.login(userDetails).subscribe(res => {
      this.authService.authenticate(res.access_token);
    });

  }
}
