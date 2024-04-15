
// use filter method to create a new array that only includes borrows that have the same id as the account id 

function findAccountById(accounts, id) {
 const found = accounts.find(account => account.id == id )
 return found;
}

//returns an array of provided account objects sorted alphabetically by last name.
function sortAccountsByLastName(accounts) {
  //'sort' mutates the array; do we want to mutate 'accounts' array or do we want to make a copy????
  let sorted = accounts.sort((accountA, accountB) => 
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted;
}


function getAccountFullNames() {
  const accounts = [
    { name: { first: "Rodriquez", last: "Hawkins" } },
    { name: { first: "Dena", last: "Merritt" } },
    { name: { first: "Toni", last: "Ball" } }
  ];

  return accounts.map(account => `${account.name.first} ${account.name.last}`);
}

const fullNames = getAccountFullNames();
console.log (fullNames);
  
  // Hint: You can use the [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method here.



// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};