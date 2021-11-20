// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat() {
    const catAdd1 = cats.push("Ralph");
    return catAdd1;
}
function destructivelyPrependCat() {
    const catAdd2 = cats.unshift("Bob");
    return catAdd2;
}
function destructivelyRemoveLastCat() {
    const catRemove1 = cats.pop();
    return catRemove1;
}
function destructivelyRemoveFirstCat() {
    const catRemove2 = cats.shift();
    return catRemove2;
}
function appendCat() {
    const catss = [...cats, "Broom"];
    return catss;
}
function prependCat() {
    const cat = ["Arnold", ...cats];
    return cat;
}
function removeLastCat() {
    const catz = cats.slice(0, cats.length - 1);
    return catz;
}
function removeFirstCat() {
    const catzz = cats.slice(1);
    return catzz;
}