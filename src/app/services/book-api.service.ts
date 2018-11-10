import { Injectable } from '@angular/core';
import { Book } from '../objects/book';
import { HttpClient } from '@angular/common/http'
import { GoogleBooksApiResponse } from '../objects/google-books-api-response';
import { GoogleBooksApiItem } from '../objects/google-books-api-item';
import { Observable } from 'rxjs'
import { GoogleBooksApiIndustryIdentifiers } from '../objects/google-books-api-industry-identifiers';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {

  private ISBN_10 = "ISBN_10";
  private ISBN_13 = "ISBN_13";
  endpointStart = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  apiKey = "AIzaSyBRwxDWHA3UmGXE51KDREMd8b4qmEXKdOQ";
  endpointEnd = "&key=";

  constructor(private http: HttpClient) { }

  searchForString(str: string): Observable<GoogleBooksApiResponse> {
    return this.http.get<GoogleBooksApiResponse>(this.buildEndpoint(str));
  }

  buildEndpoint(str: string): string {
    let endpoint = this.endpointStart;
    endpoint += str;
    endpoint += this.endpointEnd;
    endpoint += this.apiKey;
    return endpoint;
  }

  convertItemsToBooks(items: GoogleBooksApiItem[]): Book[] {
    let books = [];
    items.forEach(item => {
      let title = item.volumeInfo.title;
      if (item.volumeInfo.authors) {
        let author = item.volumeInfo.authors.pop();
        let isbn = this.findISBN(item.volumeInfo.industryIdentifiers);
        if (isbn !== "N/A") {
          books.push(new Book(title, isbn, author));
        }
      }
    });
    return books;
  }

  findISBN(identifiers: GoogleBooksApiIndustryIdentifiers[]): string {
    let str = "N/A";
    
    console.log(identifiers);

    if (identifiers.find(identifier => identifier.type === this.ISBN_13) !== undefined) {
      str = identifiers.find(identifier => identifier.type === this.ISBN_13).identifier;
    } else if (identifiers.find(identifier => identifier.type === this.ISBN_10) !== undefined) {
      str = identifiers.find(identifier => identifier.type === this.ISBN_10).identifier;
    }
    return str;
  }
}
