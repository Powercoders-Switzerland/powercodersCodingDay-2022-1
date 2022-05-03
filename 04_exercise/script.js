
// Create an array called books in JavaScript. It should contain the title and author of each book, if the book has been sold out or is in stock, plus the price of the book. Add 3 books to the array. Show the elements of this array listed alphabetically in the HTML, and add a way for the user to add books. Style the HTML using CSS flex.


var books = [
    {title: 'The one and the only',
     author: 'Alex Syndrom',
     alreadySold: false,
     price: 45,
    },
    {title: 'The seller of Love',
    author: 'Axmen Walt',
    alreadySold: false,
    price: 20,
   },
    {title: 'I will die soon',
    author: 'marn Blo',
    alreadySold: true,
    price: 35,
    }];
  
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = book.title + '" by ' + book.author;
    if (book.alreadySold) {
      console.log('It is already sold "' + bookInfo);
    } else {
      console.log('The book is in stock "' + bookInfo);
    }
  }
