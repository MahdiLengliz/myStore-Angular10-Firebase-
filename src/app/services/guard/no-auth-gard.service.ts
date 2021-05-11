import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGardService implements CanActivate {

  constructor(private as:AuthService,private routes:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.as.userrr.subscribe(user=>{
        if(!user){
          resolve(true)
        }else {
          this.routes.navigate(['/'])
          return resolve(false)
        }
      })

    });
  }
}
