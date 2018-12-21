import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import * as firabase from 'firebase/app'


import 'rxjs/add/operator/toPromise';


import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { UserInterface } from '../shared/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //public UserMail: string;
  constructor(private afsAuth: AngularFireAuth, private afs: AngularFirestore) { }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => {
          resolve(userData),
            this.updateUserData(userData.user)
        }).catch(err => console.log(reject(err)))
    });
  }

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  loginFacebookUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  loginGoogleUser() {
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(credential => this.updateUserData(credential.user))
  }

  logoutUser() {
    return this.afsAuth.auth.signOut();
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: UserInterface = {
      id: user.uid,
      email: user.email,
      roles: {
        editor: true
      }
    }
    return userRef.set(data, { merge: true })
  }

  getAuth() {
    return this.afsAuth.authState.pipe(map(auth => auth));
    //return this.afsAuth.authState.map(auth => auth);
    ;
  }

  
  isUserAdmin(userUid) {
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }


  isUser(userUid) {
    return this.afs.doc<UserInterface>(`users/${userUid}`).valueChanges();
  }
}
