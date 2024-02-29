console.log("hello world");

const display = document.getElementById("display");

function appendtodisplay(input) {
  display.value += input;
}
function cleardisplay() {
  display.value = "";
}
function calculate() {
  display.value = eval(display.value);
}