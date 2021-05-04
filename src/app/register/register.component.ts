import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private auth: AuthService, private fs: AngularFirestore, private route: Router) { }

  ngOnInit() {
  }
  register(f) {
    let data = f.value;
    console.log(data);
    this.auth.signUp(data.email, data.pwd).then((user) => {
      localStorage.setItem('idUserStorage',user.user.uid)

      console.log('register done');
      this.fs.collection('users').doc(user.user.uid).set({
        username: data.username,
        email: data.email,
        uid: user.user.uid,
        image:'https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-businessman-profile-default-avatar-photo-placeholder-isolated-white-117831744.jpg'      });
      this.route.navigate(['/']);
    }).catch(() => {
      console.log('error register');
  });
  }
}
