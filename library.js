class Library { 
  constructor(books = []) {
  this.books = books;
}

get bookCount() {
  return this.countBooks();
};

countBooks() {
  return length(this.books);
};

addBook(newBook) {
  this.books.push(newBook);
};

addBooks(newBooks) {
  newBooks.forEach(book => this.books.push(book));
};

printInventory() {
  this.books.forEach((book) => {
    const book = {
      title: book.title,
      author: book.author
    }
    console.log(title + "by " + author)
    // console.log(`${book.title} by ${book.author}`);
  });
}
}

export default Library;