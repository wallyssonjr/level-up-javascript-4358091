// Write your code here
// function Movie(title, director, genre, reeaseYear,rating){
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.reeaseYear = reeaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function(){
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released 
//   in ${this.reeaseYear}. It received a rating of ${this.rating}`;
// }

class Movie{
  constructor(title, director, genre, reeaseYear,rating){
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.reeaseYear = reeaseYear;
    this.rating = rating;
  }

  getOverview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released 
    in ${this.reeaseYear}. It received a rating of ${this.rating}`;
  }
}


const Spiderman = new Movie("Spiderman", "Sam Raimi", "Action", 2022,87);
const Batman = new Movie("Batman", "Christopher Nolan", "Action", 2008,83);

console.log(Spiderman);
console.log(Spiderman.getOverview());
console.log(Batman.getOverview());