import { Library } from "./../../Solid/1.Srp/Library";
import { Book } from "./../../Solid/1.Srp/Book";

describe("Library Class", () => {
    let library: Library;
    let book1: Book;
    let book2: Book;

    beforeEach(() => {
        library = new Library();
        book1 = new Book("Clean Code", "Edric Cao", 2023);
        book2 = new Book("Design Pattern", "Edric Cao", 2022);

        library.addBook(book1);
        library.addBook(book2);
    });

    test("should add books to the library", () => {
        expect(library.getTotalNumberOfBooks()).toBe(2);
    });

    test("should return a book by title", () => {
        expect(library.getBookByTitle("Clean Code")).toEqual(book1);
    });

    test("should remove a book by title", () => {
        library.removeBook("Clean Code");
        expect(library.getTotalNumberOfBooks()).toBe(1);
        expect(library.getBookByTitle("Clean Code")).toBeUndefined();
    });

    test("should return books by author", () => {
        expect(library.getBooksByAuthor("Edric Cao")).toEqual([book1, book2]);
    });

    test("should return books by publication year", () => {
        expect(library.getBooksByPublicationYear(2023)).toEqual([book1]);
    });

    test("should return total number of books", () => {
        expect(library.getTotalNumberOfBooks()).toBe(2);
    });

    test("should list all books", () => {
        expect(library.getListBooks()).toEqual([book1, book2]);
    });
});
