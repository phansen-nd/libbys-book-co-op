import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFirestore } from '@angular/fire/firestore'
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Observable<any[]>;

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }

  ngOnInit() { }
}
