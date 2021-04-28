import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userrr: Observable<firebase.User>;
constructor(private fa: AngularFireAuth) {
  this.userrr = this.fa.user;
}
signUp(email, password) {
    return this.fa.createUserWithEmailAndPassword(email, password);
}
signIn(email, password) {
    return this.fa.signInWithEmailAndPassword(email, password);
}
}
