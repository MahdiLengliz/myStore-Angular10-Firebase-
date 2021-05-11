import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfilComponent} from './profil/profil.component';
import {ProductsComponent} from './products/products.component';
import {MyProductsComponent} from './my-products/my-products.component';
import {AuthGuardService} from './services/guard/authGuard.service';
import {NoAuthGardService} from './services/guard/no-auth-gard.service';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'register', component: RegisterComponent,canActivate:[NoAuthGardService]},
  {path: 'login' , component: LoginComponent,canActivate:[NoAuthGardService]},
  {path: 'profil' , component: ProfilComponent,canActivate:[AuthGuardService]},
  {path: 'products' , component: ProductsComponent,canActivate:[AuthGuardService]},
  {path: 'myProducts' , component: MyProductsComponent,canActivate:[AuthGuardService]},
  {path:'productDetail/:id',component:ProductDetailsComponent,canActivate:[AuthGuardService]},
  {path:'404',component:ErrorNotFoundComponent},
  {path:'**',redirectTo:'404'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
