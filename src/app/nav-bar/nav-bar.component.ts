import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
isuser;
  constructor(private auth: AngularFireAuth, private route: Router, fa: AuthService) {
    fa.userrr.subscribe(user => {
      if (user) {
        this.isuser = true;
      } else {
        this.isuser = false;
      }
    });
  }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut().then(() => {
      console.log('logout done');
      localStorage.removeItem('idUserStorage')
      this.route.navigate(['/login']);
    }).catch(() => {
      console.log('error logout');
    });

  }
}
