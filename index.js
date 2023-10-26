const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop("Bob");
}
function destructivelyRemoveFirstCat(name) {
    cats.shift("Milo")
}
function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push("Broom");
    return copyOfCats;
}
function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift("Arnold");
    return copyOfCats;
}
function removeLastCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.pop("Garfield");
    return copyOfCats;
}
function removeFirstCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.shift("Milo");
    return copyOfCats;
}