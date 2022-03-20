const current = document.getElementById("current");
const previous = document.getElementById("previous");
getText("data.json");

async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    current.innerHTML = myText;
}
