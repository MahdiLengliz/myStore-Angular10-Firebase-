import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../services/auth.service';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit,OnDestroy {
  Uid;
  succesUpdate = '';
  profilArray = {
    username: '',
    image: '',
    uid: ''
  };
  task: AngularFireUploadTask;
  ref: AngularFireStorageReference;
  pourcentage;
  getUser: Subscription

  constructor(private fs: AngularFirestore, as: AuthService, private fst: AngularFireStorage) {
    this.getUser = as.userrr.subscribe((data) => {
      //id de doc
      this.Uid = data.uid;
      console.log(this.Uid)
    })
  }

  ngOnInit() {
    this.fs.collection('users').ref.doc(localStorage.getItem('idUserStorage')).get().then((data) => {
      console.log(data.data())
      this.profilArray.username = data.data()['username'];
      this.profilArray.image = data.data()['image'];
      this.profilArray.uid = localStorage.getItem('idUserStorage');

    })
  }

  update() {
    this.fs.collection('users').doc(this.profilArray.uid).update({
      username: this.profilArray.username
    }).then(() => {
      this.succesUpdate = "Update succes"
    }).catch(() => {
      this.succesUpdate = "Error Update"

    })

  }

  uploadImage(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.fst.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    console.log(this.task)
    this.pourcentage = this.task.percentageChanges();
    this.task.then((data) => {
      data.ref.getDownloadURL().then(url => {
        this.fs.collection('users').doc(this.profilArray.uid).update({
          image: url
        })

      })
    })
  }

  ngOnDestroy() {
  this.getUser.unsubscribe()
    console.log('profil destroy done')
  }
}

