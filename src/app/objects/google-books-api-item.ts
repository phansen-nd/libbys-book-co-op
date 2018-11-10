import { GoogleBooksApiVolume } from "./google-books-api-volume";

export interface GoogleBooksApiItem {
    id: string;
    volumeInfo: GoogleBooksApiVolume;
}
