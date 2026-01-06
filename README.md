🔍 Type Ahead (City & State Search)

A simple type-ahead (autocomplete) search application built with vanilla JavaScript, HTML, and CSS.
As the user types, the app filters and displays matching U.S. cities and states in real time.

✨ Features

🔎 Real-time search as you type

🏙️ Filters by city or state

⚡ Fast client-side filtering

🧠 Case-insensitive matching

📊 Displays population data

🧼 Clean, responsive UI

🛠️ Built With

HTML5

CSS3

JavaScript (ES6)

Fetch API

Array methods (filter, map, includes)

📂 Project Structure
├── index.html
├── style.css
├── script.js
└── README.md

📦 Data Source

City data is fetched from a public JSON file:

 "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"


The data includes:

City name

State

Population

Latitude & longitude

🧠 How It Works

Fetch city data using the Fetch API

Store data in an array

Listen for user input

Filter cities using includes()

Dynamically render results to the DOM

Core Logic
function searchCities(query, cities) {
  const q = query.toLowerCase();
  return cities.filter(item =>
    item.city.toLowerCase().includes(q) ||
    item.state.toLowerCase().includes(q)
  );
}

▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/type-ahead.git

2️⃣ Open the project
cd type-ahead-search

3️⃣ Run locally

Simply open index.html in your browser.

🌱 Future Improvements

Highlight matched text

Format population numbers with commas

Debounce input for better performance

Keyboard navigation support

Convert to React / Vue version


📜 License

This project is open source and available for educational purpose.

🙌 Acknowledgements

Inspired by a JavaScript type-ahead exercise and built for learning and practice.
