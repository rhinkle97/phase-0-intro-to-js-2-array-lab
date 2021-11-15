// Write your solution here!
const cats = ['Milo','Otis','Garfield']

function destructivelyAppendKitten(name) {
    cats.push(name);
    return cats;
 }
 
 function destructivelyPrependKitten(name) {
   cats.unshift(name);
   return cats;
 }
 
 function destructivelyRemoveLastKitten(name) {
   cats.pop(name);
   return cats;
 }
 
 function destructivelyRemoveFirstKitten(name) {
   cats.shift(name);
   return cats;
 }
 
 function appendKitten(name) {
    name_1= [...cats,name];
   return name_1;
 }
 
 function prependKitten(name) {
   name_2=[name, ...cats];
   return name_2;
 }
 
 function removeLastKitten() {
   caats= cats.slice(0,kittens.length-1);
   return caats;
 }
 
 function removeFirstKitten() {
   var catts= cats.slice(1);
   return catts;
 }