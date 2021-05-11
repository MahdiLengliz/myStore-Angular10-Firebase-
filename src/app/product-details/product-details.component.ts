import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {element} from 'protractor';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  dataProduct={
    title:'',
    description:'',
    image:''
  }
  idParam
  constructor(private fs:AngularFirestore,private params:ActivatedRoute) {
    this.params.params.subscribe(query=>{
      return this.idParam=query.id;
    })
  }

  ngOnInit() {

    this.fs.collection('products').ref.doc(this.idParam).get().then(data=>{
      console.log(data.data())
      this.dataProduct.title=data.data()['title'];
      this.dataProduct.description=data.data()['description'];
      this.dataProduct.image=data.data()['image'];
    })
  }


}
