let a = 1;
let b = 2;
let c = {
  name: '1ee',
  age: 30,
  address: 'busan',
  tel: '01012345678',
}

let d = a;
let e = c;

a = 10;

let f = c;

c.age = 50;

console.log(c);
console.log(f);
