import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor(private fa: AngularFireAuth) {}
signUp(email, password) {
    return this.fa.createUserWithEmailAndPassword(email, password);
}
signIn(email, password) {
    return this.fa.signInWithEmailAndPassword(email, password);
}
}
