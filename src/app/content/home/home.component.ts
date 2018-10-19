import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Observable<any[]>;

  constructor(afs: AngularFirestore) {
    this.books = afs.collection('books').valueChanges();
  }

  ngOnInit() { }
}
