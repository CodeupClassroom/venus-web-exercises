(function() {
    let books = [];
    const book1 = {
        title: "Book 1",
        author: {
            firstName: "Bob",
            lastName: "Smith",
            age: 20
        }
    }
    books[0] = book1;

    const book2 = {
        title: "Book 2",
        author: {
            firstName: "Lou",
            lastName: "Smith",
            age: 30
        }
    }
    books[1] = book2;

    const book3 = {
        title: "Book 3",
        author: {
            firstName: "Jane",
            lastName: "Smith",
            age: 40
        }
    }
    books[2] = book3;

    console.log(books);

    // use MAP to produce an array of just book titles
    let bookTitles = books.map(function(book) {
        return book.title;
    });

    // the long way of doing it
    // let bookTitles = [];
    // for (let i = 0; i < books.length; i++) {
    //     const book = books[i];
    //     bookTitles[i] = book.title;
    // }

    console.log(bookTitles)

    // use FILTER to produce a subset of books for authors age 30+
    // const boomerBooks = books.filter(function(book) {
    //     // return true if we want book in the output array
    //     return book.author.age >= 30;
    // });

    let boomerBooks = [];
    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if(book.author.age >= 30) {
            // boomerBooks[i] = book;
            boomerBooks.push(book);
        }
    }
    console.log(boomerBooks);

    // use REDUCE to sum the author ages
    // const sumAge = books.reduce(function(totalAgeSoFar, book) {
    //     return totalAgeSoFar + book.author.age;
    // }, 0);
    const sumAge = books.reduce((totalAgeSoFar, book) => totalAgeSoFar + book.author.age
        , 0);
    console.log(sumAge);
    console.log(sumAge / books.length);

    const minAge = books.reduce(function(minAgeSoFar, book) {
        return Math.min(minAgeSoFar, book.author.age);
        // if(book.author.age < minAgeSoFar) {
        //     return book.author.age;
        // }
        // return minAgeSoFar;
    }, Infinity);
    console.log(minAge); // should return 20

})();