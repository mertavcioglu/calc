let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
//let equals = (a, b) => a;


//Done
let changeSign = () => document.getElementById("display").innerHTML *= (-1);
let sqr = () => document.getElementById("display").innerHTML *= document.getElementById("display").innerHTML;
let sqrt = () => document.getElementById("display").innerHTML /= Math.sqrt(document.getElementById("display").innerHTML);
let clear = () => document.getElementById("display").innerHTML = "";
let point = () => document.getElementById("display").innerHTML += ".";
//Done**********************************************

let displayValue = 0;
let savedValue = 0;
let func = "";
let num2 = 0;

let add = (num1, num2) => {
  num2 = parseFloat(prompt("whats b"))
  displayValue = num1 + num2;
  document.getElementById("display").innerHTML = displayValue;
  savedValue = displayValue;


  console.log("num1:", num1);
  console.log("num2:", num2);
  console.log("savedValue", savedValue);
  console.log("displayValue", displayValue);
}
/*function operate(func, a, b) {
  if (func == "subtract")
    subtract(a, b);
  if (func == "multiply")
    multiply(a, b);
  if (func == "divide")
    divide(a, b);

  if (func == "add") {
    displayValue = add(a, b);

    console.log("a:", a);
    console.log("b:", b);
    console.log("displayValue:", displayValue);
    console.log("total value:", add(a, b))
  };
}*/

let num1 = document.querySelectorAll(".number");
num1.forEach(e => {
  e.addEventListener('click', function () {
    document.getElementById("display").innerHTML += e.value;
    num1 = parseFloat(document.getElementById("display").innerHTML);
    savedValue = num1;
  });
});




const e0 = document.getElementById("add");
e0.addEventListener("click", function () {
  add(num1, num2);
});


/*

const e0 = document.getElementById("add");
e0.addEventListener("click", function () {
  operate("add", a, b);
});


*/

//Done**********************************************
const e1 = document.getElementById("changeSign");
e1.addEventListener("click", function () {
  changeSign();
});

const e2 = document.getElementById("sqr");
e2.addEventListener("click", function () {
  sqr();
});

const e3 = document.getElementById("sqrt");
e3.addEventListener("click", function () {
  sqrt();
});

const e4 = document.getElementById("clear");
e4.addEventListener("click", function () {
  clear();
});

const e5 = document.getElementById("point");
e5.addEventListener("click", function () {
  point();
});
//Done**********************************************

/*


const operators = document.querySelectorAll(".operator");
numbers.forEach(e => {
  e.addEventListener('click', function () {
    func == "add";
    a = displayValue;
    displayValue = 0;
    operate(func, a, b)
  });
});

*/





/*
const e0 = document.getElementById("zero");
e0.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e0.value;
});

const e1 = document.getElementById("one");
e1.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e1.value;
});

const e2 = document.getElementById("two");
e2.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e2.value;
});

const e3 = document.getElementById("three");
e3.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e3.value;
});

const e4 = document.getElementById("four");
e4.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e4.value;
});
const e5 = document.getElementById("five");
e5.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e5.value;
});

const e6 = document.getElementById("six");
e6.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e6.value;
});

const e7 = document.getElementById("seven");
e7.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e7.value;
});

const e8 = document.getElementById("eight");
e8.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e8.value;
});

const e9 = document.getElementById("nine");
e9.addEventListener("click", function () {
  document.getElementById("display").innerHTML += e9.value;
});

*/
