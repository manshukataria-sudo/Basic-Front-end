//    https://restcountries.com/v3.1/alpha?codes=170,no,est,pe
const urlParams = new URLSearchParams(window.location.search);
const flagImage = document.querySelector(".country-detail img");
const countryNameH2 = document.querySelector(".country-detail h2");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLeveldomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");
const backButton = document.querySelector(".back-button");
const countryName = urlParams.get("name");
const themeSwitcher = document.querySelector(".theme-switcher");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = `${country.flags.svg}`;
    countryNameH2.innerText = `${country.name.common}`;
    if (country.name.nativeName && Object.values(country.name.nativeName)[0]) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common;
    } else {
      nativeName.innerText = country.name.common;
    }
    population.innerText = country.population.toLocaleString("en-IN");
    region.innerText = country.region;
    if (country.subregion) {
      subRegion.innerText = country.subregion;
    } else {
      subRegion.innerText = "No Sub Region";
    }
    topLeveldomain.innerText = country.tld.join(", ");
    if (country.currencies && Object.values(country.currencies).length > 0) {
      const helper = [];
      Object.values(country.currencies).forEach((element) => {
        helper.push(` ${element.name}`);
      });
      currencies.innerText = helper;
    } else {
      currencies.innerText = "No Currency";
    }
    if (country.capital) {
      capital.innerText = country.capital.join(", ");
    } else {
      capital.innerText = "No Capital";
    }
    if (country.languages) {
      languages.innerText = Object.values(country.languages).join(", ");
    } else {
      languages.innerText = "No Language";
    }
    if (country.borders && country.borders.length > 0) {
      country.borders.forEach((element) => {
        const borderCountry = document.createElement("a");
        borderCountry.classList.add("border-country");
        fetch(`https://restcountries.com/v3.1/alpha/${element}`)
          .then((res) => res.json())
          .then(([data]) => {
            borderCountry.href = `http://127.0.0.1:5500/PROJECTS/COUNTRIES%20API/country.html?name=${data.name.common}`;
            borderCountry.innerText = data.name.common;
            borderCountries.insertAdjacentElement("beforeend", borderCountry);
          });
      });
    } else {
      borderCountries.append("No Border Countries");
    }
  });

backButton.addEventListener("click", () => {
  history.back();
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
