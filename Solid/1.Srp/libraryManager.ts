import { Library } from "./Library";
import { Book } from "./Book";

export class LibraryManager {
    private library: Library;

    constructor() {
        this.library = new Library();
    }

    addNewBook(title: string, author: string, year: number): void {
        const book = new Book(title, author, year);
        this.library.addBook(book);
    }

    displayBookByTitle(title: string): Book | undefined {
        return this.library.getBookByTitle(title);
    }

    removeBookByTitle(title: string): void {
        this.library.removeBook(title);
    }

    listAllBooks(): Book[] {
        return this.library.getListBooks();
    }
}

// test
const libraryManager = new LibraryManager();
libraryManager.addNewBook('Clean Code', 'Edric Cao', 2023);
libraryManager.addNewBook('Design Pattern', 'Edric Cao', 2022);

console.log(libraryManager.displayBookByTitle('Clean Code'));
