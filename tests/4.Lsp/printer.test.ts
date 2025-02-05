import { OldFashionedPrinter, MultiFunctionPrinter } from "./../../Solid/4.Lsp/printer";

describe("Printer Tests", () => {
    test("OldFashionedPrinter should print but not scan or fax", () => {
        const printer = new OldFashionedPrinter();
        console.log = jest.fn();
        printer.print("Document 1");
        expect(console.log).toHaveBeenCalledWith("Printing document: Document 1");
    });

    test("MultiFunctionPrinter should print, scan, and fax", () => {
        const printer = new MultiFunctionPrinter();
        console.log = jest.fn();
        
        printer.print("Document 2");
        printer.scan("Document 2");
        printer.fax("Document 3");

        expect(console.log).toHaveBeenCalledWith("Printing document: Document 2");
        expect(console.log).toHaveBeenCalledWith("Scanning document: Document 2");
        expect(console.log).toHaveBeenCalledWith("Faxing document: Document 3");
    });
});
