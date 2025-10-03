class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;

    }
    getSummary(){
        let borrowed = this.isBorrowed? "This book has been borrowed": "This book is available";
        return `Book: ${this.title} by ${this.author} (${this.year}).  ${borrowed} `
    }

    borrowBook(){
        this.isBorrowed = true;
        return `This book ${this.title} by ${this.author} (${this.year}) has been borrowed.`
    }
}

let book1 = new Book("The Firm", "John Grisham", 1996);
let book2 = new Book("Nighttime is my time", "Mary Higgins Clark", 1990);

console.log(book1.getSummary());
console.log(book2.getSummary());
book1.borrowBook();
book2.borrowBook();

console.log(book1.getSummary());
console.log(book2.getSummary());