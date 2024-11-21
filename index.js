const quotes = [
    "You are enough just as you are.",
    "Take it one step at a time, and breathe.",
    "It’s okay to not be okay. You’re not alone.",
    "Your feelings are valid, and they matter.",
    "Every storm eventually runs out of rain.",
    "Healing is a journey, and you’re on the right path.",
    "You are capable of amazing things.",
    "The sun will rise, and so will you.",
    "You have survived 100% of your hardest days.",
    "Progress, not perfection."
  ];
  
  function displayRandomQuote() {
    const quoteText = document.querySelector('.quote-text');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex]; 
  }
  
  window.addEventListener('DOMContentLoaded', displayRandomQuote);
  