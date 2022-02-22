/*6.In JavaScript ES6 an arrow function expression is a syntactically compact 
alternative to a regular function expression. 
Create a function that takes a string representing a function and 
converts between an arrow function and a regular function

- If the input is a regular function, return an equivalent arrow function.
- If the input is an arrow function, return an equivalent regular function.*/

function convertIntoFunction(input) {
    let result = "";
    if (input.includes("=>")) {
        let [fname , parameters]=input.split("=")
        fname=fname.split(" ")[1]
        let body=input.split("=>")[1]
        result += `function ${fname}${parameters} { \n ${body} \n}`
    } else {
        let nameStart=input.indexOf(" ");
        let startPara = input.indexOf("(");
        let endPara = input.indexOf(")");
        let functionName=input.slice(nameStart,startPara);
        let parameters = input.slice(startPara, endPara + 1)
        let body = input.slice(endPara + 1)
        result = `let${functionName} = ${parameters} =>\n${body} `
    }
    console.log(result)

}


input='let pow=(a,b) => console.log(a-b)'
convertIntoFunction(input)
input = 'function inp(a,b){ console.log(a+b)}'
convertIntoFunction(input)