import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  Uid;
  succesMessage;
  dataArray=[];
  getProducts:Subscription
  getUsers:Subscription
  constructor(private fs:AngularFirestore, private as:AuthService ,private routes:Router) {
    this.getUsers=this.as.userrr.subscribe((user)=>{

      this.Uid=user.uid;


    })
  }

  ngOnInit() {
    this.getProducts=this.fs.collection('products').snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return {
          id:element.payload.doc.id,
          title:element.payload.doc.data()['title'],
          description:element.payload.doc.data()['description'],
          image:element.payload.doc.data()['image'],
          uid:element.payload.doc.data()['uid']
        }
      })
    })
  }
ngOnDestroy() {
    this.getProducts.unsubscribe()
  console.log('destroy user done')
  this.getUsers.unsubscribe()
  console.log('product destroy done')
}
  details(id){
    this.routes.navigate(['productDetail/'+id])
    console.log(id)
  }
}
