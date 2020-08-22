function createTitle(title) {
  return 'The ' + title
}

function buildMainCharacter(name, age, pronouns) {
  return {
     name: name,
     age: age,
     pronouns: pronouns,
  }
}

function saveReview(title, array) {
    if (array.includes(title)) {
    } else {
      array.push(title);
    }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
}

// **** WHY DOESN'T THIS WORK ****

// function editBook(poo) {
//   return {
//     pageCount: calculatePageCount(poo) * 0.75
//   }
// }

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * 0.75
  // return bookTitle.pageCount
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
