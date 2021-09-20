class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }
  addRating(newRating) {
    if (newRating >= 1 && newRating <= 5) {
      this._ratings.push(newRating);
    } else {
      console.log("Rating should be between 1 and 5");
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._pages = pages;
    this._author = author;
  }
  get pages() {
    return this._pages;
  }
  get author() {
    return this._author;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, movieCast) {
    super(title);
    (this._director = director),
      (this._runTime = runTime),
      (this._movieCast = movieCast);
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}

class CD extends Media {
  constructor(title, artists, numOfSongs) {
    super(title);
    (this._songTitles = []),
      (this._artists = artists),
      (this._numOfSongs = numOfSongs);
  }
  get songTitles() {
    return this._songTitles;
  }
  get artists() {
    return this._artists;
  }
  get numOfSongs() {
    return this._numOfSongs;
  }
  shuffle() {
    const randomSong = Math.floor(Math.random() * this._numOfSongs);
    return this._songTitles[randomSong];
  }
  addSong(songTitle) {
    return this._songTitles.push(songTitle);
  }
}

class Catalog extends Media {
  constructor() {
    this._books = [];
    this._CDs = [];
    this._movies = [];
  }
  get books() {
    return this._books;
  }
  get CDs() {
    return this._CDs;
  }
  get movies() {
    return this._movies;
  }
}

// book
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(
  `${
    historyOfEverything.title
  } has a rating of ${historyOfEverything.getAverageRating()}`
);

// movie
const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(`${speed.title} has a rating of ${speed.getAverageRating()}`);

// CD
const honestLabour = new CD("Honest Labour", "yyyyy222", 19);

honestLabour.toggleCheckOutStatus();
console.log(honestLabour.isCheckedOut);

honestLabour.addSong("Solemn");
honestLabour.addSong("LV");
honestLabour.addSong("<>");
console.log(`Tracklist: ${honestLabour.songTitles}`);
console.log(`Tracks: ${honestLabour.numOfSongs}`);
