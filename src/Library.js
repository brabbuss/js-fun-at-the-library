function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

// finding shelf to add to by .genre of books
// add that book to that shelf
//

// function addBook(library, book) {
//   library.shelves.fantasy.unshift(book)
// }

function addBook(library, book) {
  if (book.genre === 'fantasy') {
     library.shelves.fantasy.unshift(book)
  } else if (book.genre === 'fiction') {
     library.shelves.fiction.unshift(book)
  } else {
     library.shelves.nonFiction.unshift(book)
  }
}

function checkoutBook(library, book) {
  var message = 'You have now checked out ' + book + ' from the Denver Public Library';
  var sorry = 'Sorry, there are currently no copies of ' + book + ' available at the Denver Public Library';
  var available = true;
  if (book == book) {
  for (i = 0; i < library.shelves.fantasy.length; i++) {
    if (book === library.shelves.fantasy[i].title) {
      library.shelves.fantasy.splice(book);
      return message;
    }
  }
  for (i = 0; i < library.shelves.fiction.length; i++) {
    if (book === library.shelves.fiction[i].title) {
      library.shelves.fiction.splice(book);
      return message
    }
  }
  for (i = 0; i < library.shelves.nonFiction.length; i++) {
    if (book === library.shelves.nonFiction[i].title) {
      library.shelves.nonFiction.splice(book);
      return message
    }
  }
  return sorry
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
