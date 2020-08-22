function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  } else {
  }
}

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, i);
    }
  }
}

function listTitles(shelf) {
  var shelfList = []
  for (i = 0; i < shelf.length; i++) {
    shelfList.push(shelf[i].title)
  }
  return shelfList.join(', ');
}

function searchShelf(shelf, bookTitle) {
  var titleArray = [];
    for (i = 0; i < shelf.length; i++) {
      titleArray.push(shelf[i].title)
    }
  if (titleArray.includes(bookTitle)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
