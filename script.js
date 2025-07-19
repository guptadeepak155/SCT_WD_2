const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    if (value) {
      display.value += value;
    }
  });
});

equalBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => display.value = "");

function calculate() {
  try {
    // Safe eval using Function constructor
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
}

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const allowed = "0123456789/*-+().";
  if (allowed.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    display.value = "";
  }
});
