import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }
  register(f) {
    let data = f.value;
    console.log(data);
    this.auth.signUp(data.email, data.pwd).then((user) => {
      console.log('register done');
    }).catch(() => {
      console.log('error register');
  });
  }
}
