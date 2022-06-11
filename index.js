const input = document.querySelector("input");
const display = document.querySelector("h1");
const button = document.querySelector("button");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

button.onclick = () => {
  let birthYear = Number(input.value.substring(0, 4));
  let birthMonth = Number(input.value.substring(5, 7));
  let birthDay = Number(input.value.substring(8, 10));
  let age = year - birthYear;
  if (month < birthMonth) {
    age--;
  } else if (month == birthMonth) {
    if (day < birthDay) {
      age--;
    }
  }
  display.innerText = `You are ${age} years old`;
};
