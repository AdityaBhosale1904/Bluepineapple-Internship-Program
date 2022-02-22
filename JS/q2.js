/* 2.Create a function that takes an array of strings and 
returns an array with only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.*/


function getStringsContainingNumbers(input) {

    let result = input.filter(element => {
        return /[0-9]/.test(element)
    });
    return result;
}

const input = ["Aditya1904", "Bhosale", "Three", "4-Four","Five","2000","12"]
let result = getStringsContainingNumbers(input)
console.log("input=",input);
console.table(result);  