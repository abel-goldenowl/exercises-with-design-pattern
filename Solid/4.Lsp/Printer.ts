// Segregated Interfaces
interface Printer {
    print(document: string): void;
}

interface Scanner {
    scan(document: string): void;
}

interface Fax {
    fax(document: string): void;
}

// Old-fashioned printer (Only supports printing)
class OldFashionedPrinter implements Printer {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }
}

// Modern printer (Supports print, scan, and fax)
class MultiFunctionPrinter implements Printer, Scanner, Fax {
    print(document: string): void {
        console.log(`Printing document: ${document}`);
    }

    scan(document: string): void {
        console.log(`Scanning document: ${document}`);
    }

    fax(document: string): void {
        console.log(`Faxing document: ${document}`);
    }
}

// Function to test printing capability
function testPrint(printer: Printer, document: string): void {
    printer.print(document);
}

// Test case executions
const oldPrinter = new OldFashionedPrinter();
testPrint(oldPrinter, "Document 1");

const modernPrinter = new MultiFunctionPrinter();
testPrint(modernPrinter, "Document 2");
modernPrinter.scan("Document 2");
modernPrinter.fax("Document 3");
