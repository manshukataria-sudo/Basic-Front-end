const userInput = document.querySelector(".string-input");

const lowerCase = document.querySelector(".lower-case");
const upperCase = document.querySelector(".upper-case");
const camelCase = document.querySelector(".camel-case");
const pascalCase = document.querySelector(".pascal-case");
const snakeCase = document.querySelector(".snake-case");
const kebabCase = document.querySelector(".kebab-case");
const trimCases = document.querySelector(".trim-spaces");

const toCamelCase = (str) => {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      ans += str[0].toLowerCase();
    } else if (str[i - 1] == " " && str[i] != " ") {
      ans += str[i].toUpperCase();
    } else if (str[i] != " ") {
      ans += str[i];
    }
  }
  return ans;
};
const toPascalCase = (str) => {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      ans += str[0].toUpperCase();
    } else if (str[i - 1] == " " && str[i] != " ") {
      ans += str[i].toUpperCase();
    } else if (str[i] != " ") {
      ans += str[i];
    }
  }
  return ans;
};
userInput.addEventListener("input", () => {
  let innerValue = userInput.value;
  lowerCase.innerText = innerValue.toLowerCase();
  upperCase.innerText = innerValue.toUpperCase();
  camelCase.innerText = toCamelCase(innerValue.trim());
  pascalCase.innerText = toPascalCase(innerValue.trim());
  snakeCase.innerText = innerValue.replaceAll(" ", "_");
  kebabCase.innerText = innerValue.replaceAll(" ", "-");
  trimCases.innerText = innerValue.replaceAll(" ", "");
});
