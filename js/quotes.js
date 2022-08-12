// Collected Quotes in an array
const quotes = [
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The world is a book and those who do not travel read only one page.",
    author: "Saint Augustine",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "To Travel is to Live",
    author: "Hans Christian Andersen",
  },
  {
    quote: "Only a life lived for others is a life worthwhile.",
    author: "Albert Einstein",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Never go on trips with anyone you do ntot love.",
    author: "Hemmingway",
  },
  {
    quote: "We wander for distraction, but we travel for fulfilment.",
    author: "Hilaire Belloc",
  },
  {
    quote: "Travel expands the mind and fills the gap.",
    author: "Sheda Savage",
  },
];

const quoteRegion = document.querySelector("#quote");
const quote = document.querySelector(".quote__context");
const author = document.querySelector(".quote__author");
const randomNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNumber];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;

const toggleAuthor = () => {
  author.classList.toggle("visibility-hidden");
};

const paintAuthor = () => {
  toggleAuthor();
  quoteRegion.animate(
    {
      transform: ["translateY(-20px)"],
    },
    {
      duration: 100,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
};

const hideAuthor = () => {
  toggleAuthor();
  quoteRegion.animate(
    {
      transform: ["translateY(20px)"],
    },
    {
      duration: 100,
      fill: "forwards",
      easing: "ease-in-out",
    }
  );
};

quoteRegion.addEventListener("mouseover", paintAuthor);
quoteRegion.addEventListener("mouseleave", hideAuthor);
