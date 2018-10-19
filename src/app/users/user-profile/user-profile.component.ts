import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  books: Observable<any[]>;

  constructor(public authService: AuthService, afs: AngularFirestore) {
    this.books = afs.collection('books').valueChanges();
  }

  ngOnInit() {
  }
}
