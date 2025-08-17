const resultBox = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

let expression = "";

// Button click handler
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const btnValue = button.textContent;

    if (btnValue === "C") {
      expression = "";
      resultBox.value = "";
    } 
    else if (btnValue === "=") {
      try {
        expression = eval(expression.replace("%","/100"));  // % support
        resultBox.value = expression;
      } catch {
        resultBox.value = "Error";
        expression = "";
      }
    }
    else if (btnValue === "←") {
      expression = expression.slice(0, -1);
      resultBox.value = expression;
    }
    else {
      expression += btnValue;
      resultBox.value = expression;
    }
  });
});

// Optional: Keyboard Support
document.addEventListener('keydown', (e) => {
  if((e.key >= '0' && e.key <= '9') || "+-*/.".includes(e.key)) {
    expression += e.key;
    resultBox.value = expression;
  } else if(e.key === "Enter") {
    try {
      expression = eval(expression.replace("%","/100"));
      resultBox.value = expression;
    } catch {
      resultBox.value = "Error";
      expression = "";
    }
  } else if(e.key === "Backspace") {
    expression = expression.slice(0, -1);
    resultBox.value = expression;
  } else if(e.key === "Escape") {
    expression = "";
    resultBox.value = "";
  }
});

