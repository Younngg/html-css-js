

/* function numAdd(a, b, c){
  console.log(arguments);
  console.log(arguments.length); //인자 개수
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b + c;
}

console.log(numAdd(10, 20, 30)); */
// console.log(numAdd(10, 20)); //NaN 인수 전달 안하면 언디파인드]

//배열의 형태를 가진 어쩌구

/* function numAdd(a=0,b=0,c=0){ //초기값
  console.log(arguments); //인수만 들어가기 때문에 하나밖에 안 잡힘. 초기값은 안 잡힘
  return a+b+c; //10+0+0
}

console.log(numAdd(10)); */


/* function numAdd(...num){ //전달받은 인수값을 가지고 그걸 하나하나 다 풀어내는 연산자 스프레드 연산자 
  console.log(arguments); //전달받은 인수만큼 저장함
  console.log(num);
  console.log(num.length);
  console.log(num[0]);
  return;
} */

/* console.log(numAdd(10, 20, 30, 40, 50, 60)); */

//for문을 이용해 매개변수의 총 합을 구하시오

/* function numAdd(...num) {
  console.log(num.length);
  for(let i = 1; i <= num.length; i++) {
    num[0] + num[i];
  }
  return;
}
console.log(numAdd(10, 20, 30)); */

function numSum(...num){  //rest 파라미터 
  let sum = 0
  for(let i = 0; i < num.length ; i++) {
    sum += num[i]; // sum = sum + num[i]
  }
  return sum;
}
console.log(numSum(10, 20, 30, 40, 50));