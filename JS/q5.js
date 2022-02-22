/*5. Given an array, write a function to calculate it's depth. 
Assume that a normal array has a depth of 1.
example:
                depth([1, 2, 3, 4]) ➞ 1
                depth([1, [2, 3, 4]]) ➞ 2
                depth([1, [2, [3, 4]]]) ➞ 3
                depth([1, [2, [3, [4]]]]) ➞ 4
*/ 

function countArrayDepth(arr, count) {
    arr.forEach(element => {
        if (typeof element == 'object')
            count = countArrayDepth(element, count=count+1);
    });
    return count;
}

input = [1,2,3]
console.log(`Depth of array [1,2,3] is: ${countArrayDepth(input,1 )}`)
input = [1,[2,[3,4]]]
console.log(`Depth of array[1,[2,[3,4]]] is: ${countArrayDepth(input,1 )}`)
