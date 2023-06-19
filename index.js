let cats = [];

function destructivelyAppendCat(name) {
 cats.push(name)
}
 function destructivelyPrependCat(name) {
  cats.unshift(name)
 }
 function destructivelyRemoveLastCat() {
  cats.pop()
 }
 function destructivelyRemoveFirstCat() {
  cats.shift()
 }
 function appendCat(name) {
  let newCats = [...cats, name];
  return newCats;
 }
 function prependCat(name) {
  let newCats = [name, ...cats];
  return newCats;
 }
 function removeLastCat() {
  let newCats = cats.slice(0, cats.length - 1);
  return newCats;
}
function removeFirstCat() {
  let newCats = cats.slice(1);
  return newCats;
}