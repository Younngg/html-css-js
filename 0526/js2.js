const subway = ['1호선', '2호선', '3호선', '4호선'];

console.log(subway[0]);
console.log(subway.length);
/* 
delete subway[2];  */
//splice(0, 1) (시작인덱스, 갯수) : 배열 자체를 수정
subway.splice(2, 1)
console.log(subway)

//반복문 for
for (let i = 0; i < subway.length; i++) {
  console.log(subway[i]);
}