const array=[0,2,4,6,8,10,12,14,16,18,20];
//Handon on ForLoop in javascript
for (let index = 0; index < array.length; index++) { // variable index has local scope 
console.log((5 * array[index])+500); //just a calculation on each element of an array
}