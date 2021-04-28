import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private route: Router) { }

  ngOnInit() {
  }
  logout() {
    this.auth.signOut().then(() => {
      console.log('logout done');
      this.route.navigate(['/login']);
    }).catch(() => {
      console.log('error logout');
    });

  }
}
