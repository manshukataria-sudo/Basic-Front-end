const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const searchInput = document.querySelector(".search-container input");
const themeSwitcher = document.querySelector(".theme-switcher");
let allCountries;
fetch(
  `https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,currencies,languages,borders`,
)
  .then((res) => res.json())
  .then((data) => {
    renderCountry(data);
    allCountries = data;
  });

filterByRegion.addEventListener("change", () => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(renderCountry);
});

function renderCountry(data) {
  countriesContainer.innerHTML = ``;
  data.forEach((country) => {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/PROJECTS/COUNTRIES%20API/country.html?name=${country.name.common}`;
    countryCard.innerHTML = `<img src=${country.flags.svg} alt="${country.name.common} flag "/>
                            <div class="card-text">
                                <h3>${country.name.common}</h3>
                                <p><b>Population : </b>${country.population.toLocaleString("en-IN")}</p>
                                <p><b>Region : </b>${country.region}</p>
                                <p><b>Capital : </b>${country.capital}</p>
                            </div>`;
    countriesContainer.append(countryCard);
  });
}
searchInput.addEventListener("input", (e) => {
  const filteredCountries = allCountries.filter((element) =>
    element.name.common.toLowerCase().includes(e.target.value.toLowerCase()),
  );
  renderCountry(filteredCountries);
});

themeSwitcher.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    themeSwitcher.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;Dark mode`;
    document.body.classList.remove("dark");
  } else {
    themeSwitcher.innerHTML = `<i class="fa-regular fa-sun"></i>&nbsp;Light mode`;
    document.body.classList.add("dark");
  }
});

console.log("hello world");

process.pid;
