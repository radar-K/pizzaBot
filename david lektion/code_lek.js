const element = document.createElement("div");
element.setAttribute("class", "box blue");
element.textContent = "D";

const col = document.getElementById("col1");
col.appendChild(element);

//read
const boxA = document.getElementById("A");
console.log("A", boxA);
// id ger en sak

const heading = document.getElementsByClassName("heading");
console.log(heading);
// class ger html collection som är dynamisk, hämtar du med
// med queary selection är den statisk.

const boxes = document.getElementsByClassName("box");
console.log(boxes);


const boxE = document.querySelector("#E");
console.log("boxE", boxE);

const redBoxes = document.querySelectorAll(".box.red");
console.log("redBoxes", redBoxes);

// update med array
const blueBoxes = document.querySelectorAll(".blue");
blueBoxes.forEach((blueBoxes) => {
    blueBoxes.innerHTML = `<h2>${blueBoxes.innerHTML}</h2>`
});

const moreBlue = ["E", "f", "g"];

const col1 = document.getElementById("col1");

moreBlue.forEach((boxletter) => {
    const element = document.createElement("div");
    element.setAttribute("class", "box green");
    element.textContent = boxletter;
    col1.appendChild(element);
});

