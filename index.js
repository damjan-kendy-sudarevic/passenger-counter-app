let counterElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el")
let count = 0;

function increment() {
    counterElement.textContent = ++count;
}

function save() {
    let savedCount = count + " - ";
    saveElement.textContent += savedCount;
    count = 0;
    counterElement.textContent = count;
}