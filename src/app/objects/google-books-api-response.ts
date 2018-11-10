import { GoogleBooksApiItem } from "./google-books-api-item";
import { Book } from './book'

export interface GoogleBooksApiResponse {
    totalItems: number;
    items: GoogleBooksApiItem[];
}
