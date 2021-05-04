import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  Uid;
  succesMessage;
  dataArray=[];
  constructor(private fs:AngularFirestore, private as:AuthService) {
    this.as.userrr.subscribe((user)=>{

      this.Uid=user.uid;


    })
  }

  ngOnInit() {
    this.fs.collection('products').snapshotChanges().subscribe((data)=>{
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

}
