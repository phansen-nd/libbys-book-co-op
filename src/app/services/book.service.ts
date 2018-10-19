import { Injectable } from '@angular/core';
import { Book } from '../objects/book'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public books: Book[];

  constructor(private afs: AngularFirestore) { }

  getBooks(): Observable<Book[]> {
    return this.afs.collection<Book>('books').valueChanges();
  }
}
