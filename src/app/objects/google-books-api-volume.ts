import { GoogleBooksApiIndustryIdentifiers } from "./google-books-api-industry-identifiers";

export interface GoogleBooksApiVolume {
    title: string;
    authors: string[];
    industryIdentifiers: GoogleBooksApiIndustryIdentifiers[];
}
