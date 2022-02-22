/* 4. Create a function that takes one, two or more numbers as arguments and adds 
them together to get a new number. The function then repeatedly multiplies the 
digits of the new number by each other, yielding a new number, until the product is 
only 1 digit long. Return the final product.*/

let getOneDigitProduct = (...arguments) => {
    let val = 0;
    let sum = arguments.reduce((val,sum) => val+sum);
    sum = sum.toString();
    while(sum > 9) {
      
      let multiply = 1;
      for(let i=0;i<sum.length; i++) {
        multiply = multiply*sum[i];
      }
      sum = multiply;
    }
    return sum;
  }
  
  console.log(`Final Product which is only 1 digit long: ${getOneDigitProduct(2,3,4,2)}`);
  console.log(`Final Product which is only 1 digit long: ${getOneDigitProduct(22,23,44,32)}`);
  console.log(`Final Product which is only 1 digit long: ${getOneDigitProduct(10,6)}`);