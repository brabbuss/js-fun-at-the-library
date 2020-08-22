var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(patronName, morning) {
    if (morning == true) {
      return 'Good morning, ' + patronName + '!'
    } else {
    return 'Hello, ' + patronName + '!'
    }
  }
  findBook(bookTitle) {
    for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
      if (bookTitle === this.library.shelves.fantasy[i].title) {
        this.library.shelves.fantasy.splice([i]);
        return 'Yes, we have ' + bookTitle
      }
    }
    for (var i = 0; i < this.library.shelves.fiction.length; i++) {
      if (bookTitle === this.library.shelves.fiction[i].title) {
        this.library.shelves.fiction.splice([i]);
        return 'Yes, we have ' + bookTitle
      }
    }
    for (var i = 0; i < this.library.shelves.nonFiction.length; i++) {
      if (bookTitle === this.library.shelves.nonFIction[i].title) {
        this.library.shelves.nonFiction.splice([i]);
        return 'Yes, we have ' + bookTitle
      }
    }
    return 'Sorry, we do not have ' + bookTitle
  }
  calculateLateFee(days) {
    return Math.ceil(.25 * days)
  }
}


module.exports = Librarian;
