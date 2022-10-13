
const listGrocery = [
    "uova",
    "latte", 
    "farina",
    "acqua",
    "banane"
];

const listElement = document.querySelector("ul");

let i = 0;

listGrocery.push("zucchero");

while (i < listGrocery.length) {

    const singleElement = document.createElement("li");

    singleElement.innerHTML = listGrocery[i];

    listElement.appendChild(singleElement);

    i++
}

