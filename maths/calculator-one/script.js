
(() => {
    let a = document.getElementById("op-one").value;
let b = document.getElementById("op-one").value;
console.log(a,b)
let Addition = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    alert("veuillez entrez un numero");
  } else {
    alert(a + b);
  }
};
let substraction = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    alert("veuillez entrez un numero");
  } else {
    alert(a - b);
  }
};
let multiplication = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    alert("veuillez entrez un numero");
  } else {
    alert(a * b);
  }
};
let division = (a, b) => {
  if (typeof a == "number" && typeof b == "number") {
    alert("veuillez entrez un numero");
  } else {
    alert(a / b);
  }
};

// to get the value of an input: document.getElementById("element-id").value

document.getElementById("addition").addEventListener("click", () => {
  Addition(a, b);
});

    console.log(Addition(num1, num2));

document.getElementById("substraction").addEventListener("click", () => {
  // perform an substraction
  substraction(a, b);
});

document.getElementById("multiplication").addEventListener("click", () => {
  // perform an multiplication
  multiplication(a, b);
});

document.getElementById("division").addEventListener("click", () => {
  // perform an division
  division(a, b);
});
})();
/*
(() => {
  // to get the value of an input: document.getElementById("element-id").value
  function isNumber(num1, num2) {
    if (Number.isFinite(num1) && Number.isFinite(num2)) {
      return true;
    }
    return alert("plz enter a num");
  }
  console.log(num1, num2);

  function addition(num1, num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (isNumber(a, b)) {
      return alert(a + b);
    }

    console.log(addition(num1, num2));
  }

  function substraction(num1, num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (isNumber(a, b)) {
      return alert(a - b);
    }
  }

  function multiplication(num1, num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (isNumber(a, b)) {
      return alert(a * b);
    }
  }
  function division(num1, num2) {
    let a = parseFloat(num1);
    let b = parseFloat(num2);
    if (isNumber(a, b)) {
      return alert(a / b);
    }
  }
  document.getElementById("addition").addEventListener("click", () => {
    let a = document.getElementById("op-one").value;
    let b = document.getElementById("op-two").value;
    addition(a, b);
  });

  document.getElementById("substraction").addEventListener("click", () => {
    let a = document.getElementById("op-one").value;
    let b = document.getElementById("op-two").value;
    substraction(a, b);
  });

  document.getElementById("multiplication").addEventListener("click", () => {
    let a = document.getElementById("op-one").value;
    let b = document.getElementById("op-two").value;

    multiplication(a, b);
  });

  document.getElementById("division").addEventListener("click", () => {
    let a = document.getElementById("op-one").value;
    let b = document.getElementById("op-two").value;

    division(a, b);
  });
})();
