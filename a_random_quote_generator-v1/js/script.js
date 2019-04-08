/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// this is the array of objects which contains the quotes along with other properties
const quotes = [
  {
      quote : "It's not who I am underneath, but what I do that defines me.",
      source : 'Christian Bale',
      citation : 'Batman Begins',
      year : 2005,
      tag : '#Movie'
  },
  {
      quote : 'It is hard to fail, but it is worse never to have tried to succeed.',
      source : 'Theodore Roosevelt',
      citation : 'The Strenuous Life',
      year : 1899,
      tag : "#Speech"
  },
  {
      quote : 'Get busy living, or get busy dying.',
      source : 'Tim Robbins',
      citation : 'The Shawshank Redemption',
      year : 1994,
      tag : '#Movie'
  },
  {
      quote : 'As my plastic surgeon always said, if you gotta go, go with a smile.',
      source : 'Jack Nicholson',
      citation : 'Batman',
      year : 1989,
      tag : '#Movie'
  },
  {
      quote : 'The most beautiful thing we can experience is the mysterious. It is the source of all true art and science.',
      source : 'Albert Einstein',
      citation : 'Living Philosophies',
      year : 1931,
      tags : "#Books"
  }
];

// displays the information within the quotes array to the console
console.log(quotes);

// function gets a random quote from the quotes array
function getRandomQuote() {
  let randNum = quotes[Math.floor(Math.random() * quotes.length)];
  return randNum;
}

// tests to see if getRandomQuote function is working by displaying a quote in the console
console.log(getRandomQuote());

// gets 3 random numbers less than 256 and strings them together to return a random color
function randColor() {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  return 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
}

// gets the random quote and displays each property in the correct HTML format
// it also checks to see if a property is missing and puts in an empty string
function printQuote() {
  let randQuote = getRandomQuote();
  let quoteHTML = ' ';

  quoteHTML = "<p class = 'quote'>" + randQuote.quote + "</p>" +
  "<p class = 'source'>" + randQuote.source;

  if (randQuote.citation === undefined) {
    randQuote.citation = ' ';
    quoteHTML;
  } else {
    quoteHTML += "<span class = 'citation'>" + randQuote.citation + "</span>";
  } 

  if (randQuote.year === undefined) {
    randQuote.year = ' ';
    quoteHTML;
  } else {
    quoteHTML += "<span class = 'year'>" + randQuote.year + "</span>";
  }

  if (randQuote.tags === undefined) {
    randQuote.tags = ' ';
    quoteHTML;
  } else {
    quoteHTML += "<span class = 'tags'>" + randQuote.tags + "</span>" + "</p>";
  }

  document.getElementById('quote-box').innerHTML = quoteHTML;
  document.body.style.background = randColor();
}

// sets printQuote function to display a new quote every 5 seconds
function newQuote() {
  let timer;
  timer = setInterval(printQuote, 10000);
}

// calls the function which changes the quote every couple seconds
newQuote();

// this allows the "Show another quote" button to change quotes once clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);