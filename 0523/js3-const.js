// const a;  반드시 선언과 초기화가 같이 일어나야 함
// console.log(a); //error 반드시 선언과 초기화가 같이 일어나야 함

const num = 10;
// num = 20; //error

const kim = {
  age: 30,
  name: '순희'
}
console.log(kim);

kim.name = '철수'; //원시타입은 값을 못바꾸지만 참조 타입의 속성 값은 추가, 변경, 삭제 가능
console.log(kim);

const young = {
  age: 24,
  name: '지영'
}
console.log(young);

young.age = 25;
console.log(young);