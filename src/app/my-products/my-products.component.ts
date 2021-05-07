import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../services/auth.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
Uid;
succesMessage;
dataArray=[];

dataforUpdate={
    id:'',
    title:'',
    description:''
}
    msgUpdate
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
addP(addProduct){
    let data = addProduct.value;
    this.fs.collection("products").add({
      title:data.title,
      description:data.description,
      image:data.image,
      uid:this.Uid
        }

    ).then(()=>{
      this.succesMessage="Product Added"
      console.log("Product added")
    }).catch(()=>{
      this.succesMessage="Error Added Product"
      console.log('Error Added Product')
    })

}
getdataforupdate(id,title,description){
    this.dataforUpdate.id=id
    this.dataforUpdate.title=title
    this.dataforUpdate.description=description

}
    updateProduct(f){
    let data=f.value
    this.fs.collection("products").doc(this.dataforUpdate.id).update({
        title:data.title,
        description:data.description
    }).then(()=>{
        this.msgUpdate="title updated !!"
    }).catch(()=>{
        console.log('error of update')
    })
    }
    deleteP(id){
      this.fs.collection('products').doc(id).delete().then(()=>{
window.location.reload();
    });
}}

