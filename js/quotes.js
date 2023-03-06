import { getRandomPositiveInteger } from "./utilities.js";

let quoteText = document.querySelector('.quote')
let quoteAuthor = document.querySelector('.author')



async function getQuotes() {  

  const quotes = './data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 

  let randomQuoteNumber = getRandomPositiveInteger(0, 13)

  quoteText.textContent = data[randomQuoteNumber].text
  quoteAuthor.textContent = data[randomQuoteNumber].author

}


getQuotes();

const changeQuoteButton = document.querySelector('.change-quote')

changeQuoteButton.addEventListener('click', getQuotes)