// console.log(hello); //error 초기화되지 않았다고 나옴.
let hi;
console.log(hi); //undefined

let hello = "안녕하세요"; //전역변수 

if(true) {
  let hello = "hello" //지역변수
  console.log(hello);
}

console.log(hello); //안녕하세요

//let hello = '반갑습니다' 재선언 안 됨

hello = "반갑습니다"; //재할당 가능
console.log(hello); 