import { Book } from "./Book";

export class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    getListBooks(): Book[] {
        return this.books;
    }

    removeBook(title: string): void {
        this.books = this.books.filter(book => book.title !== title);
    }

    getBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    getTotalNumberOfBooks(): number {
        return this.books.length;
    }

    getBooksByAuthor(author: string): Book[] {
        return this.books.filter(book => book.author === author);
    }

    getBooksByPublicationYear(publicationYear: number): Book[] {
        return this.books.filter(book => book.publicationYear === publicationYear);
    }
}
