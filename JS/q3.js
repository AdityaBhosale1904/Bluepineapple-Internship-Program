/*3. Create a function which counts how many lone 1s appear in a given number. 
Lone means the number doesn't appear twice or more in a row.

example: countLoneOnes(101) ➞ 2, countLoneOnes(1191) ➞ 1*/

function countLoneOnes(n) {
    let arr = n
      .toString()
      .split("")
      .map((n) => Number(n));
    arr.push(0);
    arr.unshift(0);
    let sol = 0;
    for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] == 1) {
        if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
          sol++;
        }
      }
    }
    return sol;
  }


console.log(`countLoneOnes(101) -> ${countLoneOnes(101)}`);
console.log(`countLoneOnes(1904) -> ${countLoneOnes(1904)}`);
console.log(`countLoneOnes(2000) -> ${countLoneOnes(2000)}`);
console.log(`countLoneOnes(1191) -> ${countLoneOnes(1191)}`);
console.log(`countLoneOnes(11781891811) -> ${countLoneOnes(11781891811)}`);
console.log(`countLoneOnes(1010101) -> ${countLoneOnes(1010101)}`);