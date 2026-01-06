const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

const userInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const data = fetch(endpoint)
  .then((blob) => {
    return blob.json();
  })
  .then((data) => {
    cities.push(...data);
    console.log(searchCities('Bos',cities));
  });

function searchCities(query,cities){
 const q = query.toLowerCase();
 return cities.filter((item)=>{
    return item.city.toLowerCase().includes(q) || item.state.toLowerCase().includes(q);
 })
}

function displayCities(value){
const cityArr =  searchCities(value,cities);
const html = cityArr.map((item)=>{
return `<li><span class="name">${item.city}, ${item.state}</span>
            <span class="population">${item.population}</span>
        </li> `
}).join('');
suggestions.innerHTML = html;

}


userInput.addEventListener('input',(e)=>{displayCities(e.target.value)});