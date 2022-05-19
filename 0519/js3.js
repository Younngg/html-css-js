let a = 10;
let b = '10';

let c = a == b;
console.log(c);

let num1 = 100;
let num2 = '100';

let num3 = num1 != num2;
console.log(num3);

let num4 = num1 !== num2;
console.log(num4);

console.log(num3 && num4);
console.log(num3 || num4);
console.log(!(num3 && num4));
console.clear();

//삼항연산자, 조건부연산자

let val = 4;
let result = (val % 2 == 0)? "짝수" : "홀수"; // 조건? true : false
console.log(result);