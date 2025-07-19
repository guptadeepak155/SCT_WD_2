const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

// Handle button clicks
buttons.forEach(btn => {
  const value = btn.getAttribute("data-value");
  if (value) {
    btn.addEventListener("click", () => {
      display.value += value;
    });
  }
});

// Equal button functionality
equalBtn.addEventListener("click", () => {
  try {
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch {
    display.value = "Error";
  }
});

// Clear button
clearBtn.addEventListener("click", () => {
  display.value = "";
});

// Backspace button
backspaceBtn.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowed = "0123456789/*-+().";
  if (allowed.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = Function('"use strict";return (' + display.value + ')')();
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    display.value = "";
  }
});
