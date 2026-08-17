class Book {
    ISBN: number = 0;
    title: string = "";
    author: string = "";
    pageCount: number = 0;
}


const bookOne = new Book()
bookOne.ISBN = 9780007458424
bookOne.title = "The Hobbit"
bookOne.author = "J.R.R. Tolkien"
bookOne.pageCount = 310


const bookTwo = new Book()
bookTwo.ISBN = 9789129723946
bookTwo.title = "Harry Potter and the philosopher's stone"
bookTwo.author = "J.K. Rowling"
bookTwo.pageCount = 384

console.log(bookOne)
console.log(bookTwo)