let quotes = {};

fetch("quotes.json")
  .then(response => response.json())
  .then(data => quotes = data);

function showQuote(category) {
  let categoryQuotes = quotes[category];
  let randomIndex = Math.floor(Math.random() * categoryQuotes.length);
  document.getElementById("quote").innerText = categoryQuotes[randomIndex];
}

function chatBot() {
  let userInput = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  if (userInput.includes("love")) {
    reply = "Love is patient and kind.";
  } else if (userInput.includes("life")) {
    reply = "Life is a journey, not a destination.";
  } else if (userInput.includes("python")) {
    reply = "Python is great for beginners!";
  } else if (userInput.includes("programming")) {
    reply = "Programming teaches you how to think logically.";
  } else {
    reply = "Ask me about love, life, programming, or Python!";
  }

  document.getElementById("chatReply").innerText = reply;
}