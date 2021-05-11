import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,OnDestroy{
getUsers:Subscription
  constructor(private as:AuthService, private routes:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Promise<boolean> {
    return new Promise(resolve =>{
      this.getUsers=this.as.userrr.subscribe(user=>{
        if(user){
          resolve(true);
        }else {
          this.routes.navigate(['/'])
          resolve(false);
        }
      })
    } );
  }

  ngOnDestroy() {
  this.getUsers.unsubscribe()
    console.log('destroy user done')
  }
}
