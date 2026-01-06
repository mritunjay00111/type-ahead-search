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

function formatPopulation(number) {
  return Number(number).toLocaleString('en-US');
}

function displayCities(value){
const cityArr =  searchCities(value,cities);
const html = cityArr.map((item)=>{
  const regex = new RegExp(value,'gi');
  const cityName = item.city.replace(regex,`<span class='hl'>${value}</span>`);
  const stateName = item.state.replace(regex,`<span class='hl'>${value}</span>`);
return `<li><span class="name">${cityName}, ${stateName}</span>
            <span class="population">${formatPopulation(item.population)}</span>
        </li> `
}).join('');
suggestions.innerHTML = html;

}


userInput.addEventListener('input',(e)=>{displayCities(e.target.value)});
