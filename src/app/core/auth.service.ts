import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { auth } from 'firebase/app'
import * as firebase from 'firebase/app'
import { Router } from '@angular/router'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { Book } from '../objects/book';

interface User {
  uid: String;
  email: String;
  photoURL?: String;
  displayName?: String;
  currentBook?: Book;
  favoriteBook?: Book;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    
      this.user = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            console.log('Yes user.');
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            console.log('No user.');
            return of(null);
          }
      })
    )
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLoginProvider(provider);
  }

  private oAuthLoginProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user);
      }).catch(error => {
        console.log(error.message);
      });
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`)

    // Only update values of User that social accounts may have (not book details)
    const data: User = {
      uid: user.uid,
      email: user.email,
      photoURL: user.photoURL,
      displayName: user.displayName
    };
    return userRef.set(data);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
