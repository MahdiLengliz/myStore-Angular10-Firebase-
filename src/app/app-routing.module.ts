import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfilComponent} from './profil/profil.component';
import {ProductsComponent} from './products/products.component';
import {MyProductsComponent} from './my-products/my-products.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: '' , component: HomeComponent},
  {path: 'profil' , component: ProfilComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'myProducts' , component: MyProductsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
