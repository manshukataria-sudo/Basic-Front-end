const result = document.getElementById("result");
const result_button = document.getElementById("result_button");
const factorial_input = document.getElementsByClassName("factorial_input");

const factorial = (num) => {
  let ans = 1;
  for (let i = 1; i <= num; i++) {
    ans *= i;
  }
  result.innerText = ans;
};

// result_button.onclick = () => {
//     const ans = factorial(factorial_input.value);
//     result.innerText = ans;
//     console.log(factorial_input.value);
// };
