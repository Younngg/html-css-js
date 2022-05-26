// 날짜 시간 date 객체

const now = new Date();

console.log(now.getFullYear()); //년
console.log(now.getMonth()); // index번호로 나옴
console.log(now.getDate()); // 
console.log(now.getTime()); // 밀리초

let h = now.getHours(); //
let m = now.getMinutes(); //
let s = now.getSeconds(); //

let timebox = `${h}시 ${m}분 ${s}초`;

//random이용해서 5자리 인증번호 출력



for (let i = 1; i <= 5; i++) {
  let random = Math.floor(Math.random() * 10);
  console.log(random);
}

let random1 = ''; //undefined는 대입연산자 사용 못함
for (let i = 1; i <= 5; i++) {
  random1 += Math.floor(Math.random() * 10);
}
console.log(random1);