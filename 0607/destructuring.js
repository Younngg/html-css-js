//비구조화 할당

const arr = [1, 2, 3, 4, 5];
const [arr1,arr2,arr3,arr4,arr5] = arr; //[1,2,3,4,5]를 각각의 변수에 대입

console.log(arr3); //3

//초기값
const [num1,num2,num3=3] = [100, 200]

console.log(num3); //초기값을 넣지 않으면 undefined

//재할당 가능 (const는 안 됨)
let [a, b] = ['철수', '영희'];
[a, b] = [100,200]
console.log(a); //100

[,a,,b] = [1,2,3,4]
console.log(a); //2
console.log(b); //4

//좌변에 우변이 들어감
let price, item1, item2;
price = [item1, item2] = ['사과', '배', '키위', '귤']
console.log(item1); //사과
console.log(item2); //배
console.log(price); //['사과', '배', '키위', '귤'] 가장 오른쪽 값이 대입됨

//나머지 요소
const [txt1, txt2, ...txt3] = ['a', 'b', 'c', 'd']; //... 사용하면 나머지값을 받아옴(rest elements는 맨 앞에 올 수 없음)
console.log(txt1); //a
console.log(txt3); // ['c','d']
console.log(txt3[0]); // c 

function arrFnc([name, age]) {
  console.log(name);
  console.log(age);
}

const people = ['shin', 20]
arrFnc(people);
arrFnc(['shin', 20])