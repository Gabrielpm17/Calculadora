import { Operations } from "./math.js";
import { Display } from "./screen.js";
const d = document;

// ****Selectores*****
const $screenPrimary = d.querySelector(".calc__screen__primary"),
  $screenSecondary = d.querySelector(".calc__screen__secondary"),
  $numbers = d.querySelectorAll(".calc__num"),
  $operations = d.querySelectorAll(".calc__ope"),
  $keyboard = d.querySelector(".calc__keyboard"),
  $inputs = d.querySelectorAll(`input[type=submit]`);

let display = new Display($screenPrimary, $screenSecondary);

$keyboard.addEventListener("click", (e) => {
  if (e.target.value === undefined) return console.warn("No es un boton");
  display.displayPrimary(e.target.value);
});
