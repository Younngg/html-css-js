// 전역객체 (global object)

console.log(globalThis)

//wrapper 객체 (원시ㅣ값을 싸고 있는 객체)

const number = 2022; //원시
const str = '0525'; 
console.log(typeof number) //원시로 인식
console.log(typeof number.toString()); //객체로 인식 wrapper객체가 있어서

//number
const num = 123;
const num1 = new Number(123);
console.log(typeof num);
console.log(typeof num1);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);

if(Number.isNaN(num1)) {
  console.log('실행')
} else {
  console.log('실행안함')
}

const num2 = 123456.323456;
console.log(num2.toFixed(1)); //소숫점 찍는거
console.log(num2.toString());
console.log(num2.toPrecision(5));

//num이랑 math 다름
console.log(Math.PI);
console.log(Math.ceil);
console.log(Math.floor);
console.log(Math.round);
console.log(Math.min(1 , 5, 10));
console.log(Math.max(1 , 5, 10));
console.log(Math.random() * 10 + 1);
console.log(Math.round(Math.random() * 10 + 1));

/* charat indexof concat lastindexof includes replace slice split substring tolocalelowercase uppercase tostring trim valueof length(속성)*/

const text = 'hello world!';
console.log(text.length);
console.log(text.charAt(6));
console.log(text.indexOf('k'));
console.log(text.includes('H'));
console.log(text.substring(0,2));
console.log(text.slice(-2));
console.log(text.slice(2,5));

const spacetxt = '    q q    q';
console.log(spacetxt.trim())
const spacetxt2 = 'a b c'
console.log(spacetxt2.split(' '))

const textSample = "가나다라마바사 avcsjf;af 123456 가나다라마바사";
console.log(textSample.slice(5, -10))
console.log(textSample.substring(5, -10))

// slice(n) n번째 인덱스부터 끝까지
// slice(n, m) n번째부터 m번째 바로 앞까지 (m-1)
// 음수면 뒤부터 계산 
//substring은 음수가 오면 0이 됨