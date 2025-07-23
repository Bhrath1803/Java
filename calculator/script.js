// Create calculator layout using DOM
const calculator = document.getElementById("calculator");

const display = document.createElement("input");
display.setAttribute("type", "text");
display.setAttribute("class", "form-control mb-3");
display.setAttribute("id", "display");
display.setAttribute("readonly", true);
calculator.appendChild(display);

const buttons = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '%', '=', '+'],
  ['M+', 'M-', 'MC', 'C']
];

const buttonContainer = document.createElement("div");
buttonContainer.classList.add("d-grid", "gap-2");

buttons.forEach(row => {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("d-flex", "justify-content-between", "mb-2");

  row.forEach(label => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.className = "btn btn-outline-primary flex-fill mx-1";
    btn.addEventListener("click", () => handleButtonClick(label));
    rowDiv.appendChild(btn);
  });

  buttonContainer.appendChild(rowDiv);
});

calculator.appendChild(buttonContainer);

// Variables
let input = '';
let memory = parseFloat(localStorage.getItem('memory') || "0");

// Handle button click
function handleButtonClick(value) {
  if (value === "=") {
    try {
      input = eval(input);
    } catch {
      input = "Error";
    }
  } else if (value === "C") {
    input = '';
  } else if (value === "M+") {
    memory += parseFloat(eval(input) || 0);
    localStorage.setItem('memory', memory);
  } else if (value === "M-") {
    memory -= parseFloat(eval(input) || 0);
    localStorage.setItem('memory', memory);
  } else if (value === "MC") {
    memory = 0;
    localStorage.setItem('memory', memory);
  } else {
    input += value;
  }

  display.value = input;
}

// Keyboard input handling
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '%', 'Enter', 'Backspace'].includes(key)) {
    e.preventDefault();

    if (!isNaN(key) || ['+', '-', '*', '/', '%'].includes(key)) {
      input += key;
    } else if (key === 'Enter') {
      try {
        input = eval(input);
      } catch {
        input = "Error";
      }
    } else if (key === 'Backspace') {
      input = input.slice(0, -1);
    }

    display.value = input;
  } else {
    alert("Only numbers are allowed");
  }
});