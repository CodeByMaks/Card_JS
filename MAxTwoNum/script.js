let main = document.querySelector(".main");
main.style.display = "flex";
main.style.gap = "5px";

let Fnumber = document.querySelector("#first_number");
let Snumber = document.querySelector("#second_number");
let button = document.querySelector(".button");
let text = document.querySelector(".txt");

button.onclick = () => {
  let firstInput = Number(Fnumber.value);
  let secondInput = Number(Snumber.value);

  if (firstInput > secondInput) {
    text.innerHTML = `The big number is: ${firstInput}`;
  } else if (firstInput < secondInput) {
    text.innerHTML = `The big number is: ${secondInput}`;
  } else {
    text.innerHTML = `The big number is equal`;
  }
};
