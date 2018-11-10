import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { BookService } from '../../services/book.service'
import { BookApiService } from '../../services/book-api.service'
import { Book } from '../../objects/book'
import { GoogleBooksApiResponse } from '../../objects/google-books-api-response'

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  books: Observable<Book[]>;
  searchText: string;
  bookSearchResults: Book[];

  constructor(private bookService: BookService, private bookApiService: BookApiService) {
    this.books = bookService.getBooks();
  }

  onSearchButtonClick() {
    this.bookApiService.searchForString(this.searchText).subscribe((data: GoogleBooksApiResponse) => {
      this.bookSearchResults = this.bookApiService.convertItemsToBooks(data.items);
    });
  }

  ngOnInit() { }
}
