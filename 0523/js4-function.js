function hello() {
  console.log("hello world");
}

hello(); //매개변수가 없는 함수

function num(a, b) { //a, b가 매개변수(파라미터) 매개변수는 지역변수 (함수 밖에서는 사용x)
  return a + b; //함수의 결과값이 있을 때, 그 결과값을 반환함. 함수가 호출된 부분에 결과값을 반환 후 종료됨. 리턴문 뒤에 있는 결과값을 반환함. 연산을 통해 결과가 생기고 그 결과를 반환해줘야 하면 return을 사용
}

const result = num(10, 20); //인수 : 파라미터 인자에 들어가는 값 전달값 - 인수, 전달받는 값 - 인자

console.log(result); //30, return이 없으면 undefined

function userInfo(name, age) {
  return `이름은 ${name}, 나이는 ${age}`;
}

const profile = userInfo('지영', 24);
console.log(profile);

// 두 개의 매개변수를 받아 두 값을 곱해서 출력하는 함수

function num2(a, b) {
  return a * b ;
}
const numResult = num2(10, 20);
console.log(numResult);

function num2(a, b) {
  let su = a * b;
  return su
}
const numResult2 = num2(10, 20);
console.log(numResult2);

// const numResult3 = num2;
// console.log(numResult3) // function 자체가 나옴
const numResult3 = num2;
console.log(numResult3(30,20)) // function에 인수가 들어감

