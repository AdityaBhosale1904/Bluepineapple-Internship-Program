/*1. A boomerang is a V-shaped sequence that is either upright or upside down.
Specifically, a boomerang can be defined as: 
sub-array of length 3, with the first and last digits being the same and the 
middle digit being different.

- [3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.
input: [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
output: 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]*/

function getBoomrangs(arr) {
    let boomring = [];
    if(arr.length < 3) 
        return boomring;
  
    for(let i=0; i<arr.length-2; i++) {
      if(arr[i] === arr[i+2]) {
        boomring.push(arr.slice(i, i+3));
      }
    }
    return boomring;
  }


const input = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
console.log("Input array:", input);

let Boomerangs = getBoomrangs(input);
console.log("Boomerangs are:", Boomerangs);