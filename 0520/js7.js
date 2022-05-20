// for(초기값 ; 최종 조건문 ; 반복식(증감식)
// for (let i = 1; i < 5; i++) {
//   console.log('집에 가고 싶다')
// };

for (let i = 1 ; i<10 ; i++){
  if(i === 5){
    break;
  }
  console.log(`${i}x2 = ${i*2}`);
}

for (let i = 1 ; i<10 ; i++){
  if(i === 5){
    continue;
  }
  console.log(`${i}x2 = ${i*2}`);
}

for(let dan = 2; dan < 5 ; dan++){
  console.log(`${dan}단 출력`);
  for(let a = 1; a <= 9; a++){
    console.log(`\t${dan}x${a}=${dan*a}`)
  }
}