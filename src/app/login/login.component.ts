import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
messageError;
  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }
signin(f) {
    let data = f.value;
    this.auth.signIn(data.email, data.pwd).then(() => {
      console.log('signUp done');
      this.route.navigate(['/']);
    }).catch(() => {
      this.messageError = 'Invalid email Or password !';
      console.log('error signUp');
    });
}
}
