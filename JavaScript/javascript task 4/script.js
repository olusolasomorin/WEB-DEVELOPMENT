// Exercise 1
let movie = {
 title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,

  getSummary: function() {
    return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
  }
};


movie.isWatched = true;


console.log(movie.getSummary());
console.log("Watched:", movie.isWatched);

let movies = [
  movie,
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 9.3,
    isWatched: true,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "The Godfather Part II",
    director: "Francis Ford Coppola",
    releaseYear: 1974,
    rating: 9.0,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "The Dark Knight Rises",
    director: "Christopher Nolan",
    releaseYear: 2012,
    rating: 8.4,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    rating: 8.9,
    isWatched: false,
    getSummary: function() {
      return `${this.title} (${this.releaseYear}), directed by ${this.director}, rated ${this.rating}/10`;
    }
  }

];


function displayTopRatedMovies(movies) {
  console.log("Movies with ratings greater than 7 :");
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 8) {
      console.log(movies[i].getSummary());
    }
  }
}


displayTopRatedMovies(movies);


// Exercise 2

let cartItem = {
    name: "Bread",
    price: 1400,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
        
    }
}

console.log(cartItem.getTotal());

let cart = [
    {
    name: "Sardine",
    price: 2000,
    quantity: 2,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Pulpy Juice",
    price: 1400,
    quantity: 1,
    getTotal(){
        return this.price * this.quantity;
    }
    },
    {
    name: "Coca-cola",
    price: 500,
    quantity: 4,
    getTotal(){
        return this.price * this.quantity;
    }
    }

]

let getCartTotal = (cart) => {
   let total = 0;
    for (item of cart){
        total += item.getTotal();
    }

    console.log("The price of all the items in the cart is:", total);
}

getCartTotal(cart);


//Exercise 3

let member = {
    name: "Edward",
    membershipType: "basic",
    borrowedBooks: [],
    borrowBook(book){
        member.borrowedBooks.push(book);
        console.log(`The book ${book} has been added🤭.`)
    },

    getBorrowedCount(){
        num = borrowedBooks.length;
        console.log(`${member.name} has borrowed ${num} books.`);
        
    },

    getMembershipInfo(){
        if (member.membershipType === "premium"){
            console.log("This user has a premium badge and can borrow up to 10 books at a time!")
        } else {
            console.log("You have a basic account and you can only borrow a maximum of 5 books.")
        }
    }
}

console.log(member.name, member.membershipType);

member.borrowBook("Gabriel Allon");
member.borrowBook("Jack Ryan");


console.log(member.name, member.membershipType, member.borrowedBooks);

member.getMembershipInfo();
