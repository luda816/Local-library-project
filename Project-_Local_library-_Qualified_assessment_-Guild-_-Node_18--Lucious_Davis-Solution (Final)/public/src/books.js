//returns the author object that has the matching ID.
function findAuthorById(authors, id) {
  let authorObject = authors.find(author => author.id == id)
  return authorObject;
}


//returns the book object that has the matching ID.
function findBookById(books, id) {
  let bookObject = books.find(book => book.id == id)
  return bookObject;
}


// returns two arrays, 'returned' & 'unreturned' nested inside another array.
function partitionBooksByBorrowedStatus(books) {
  const returned = books.filter((book) => book.borrows[0].returned);
  const unreturned = books.filter ((book) => !book.borrows[0].returned);
  return [unreturned, returned];
}


/*
The `getBorrowersForBook()` function in `public/src/books.js` has two parameters, in the following order:

- A book object.
- An array of all account objects.

It should return an array of ten or fewer account objects that represents the accounts given by the IDs in the provided book's `borrows` array. 
However, each account object should include the `returned` entry from the corresponding transaction object in the `borrows` array.
*/
function getBorrowersForBook(book, accounts) {
  // create a variable that access borrows from books
    const { borrows } = book;
  // create a variable for a function that maps borrows
    const renters = borrows.map(({ id, returned })=> {
      // in the callback function, use .find() to locate the account that matches the renter's ID
      const account = accounts.find(account => account.id === id);
      // return the matching account, along with the `returned` info
      return {
        ...account,
        returned,
      };
    });
  // return renters
    return renters
  // use .sort to order the companies names in aplhabetical order
      .sort((borrowA, borrowB) => {
        const companyA = borrowA.company;
        const companyB = borrowB.company;
        return companyA.localeCompare(companyB);
      })
      // use .slice to narrow the list of renters to 10 or less
      .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};