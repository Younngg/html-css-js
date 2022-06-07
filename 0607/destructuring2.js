//객체의 비구조화 할당
//const {age: b, name: a} = {name: 'lee', age: 30}
const {age, name} = {name: 'lee', age: 30};
console.log(name); //lee
console.log(age); //30
//배열은 순서대로지만 객체는 key로 찾음 name이 일치해야 함. 순서 상관x 


const address = 'seoul';
const telNum = '010';
const gender = 'male';

const user = {address,telNum,gender} //key와 변수이름이 같으면 축약 가능

console.log(user);

const {a:x=0, b:y=0, c:z} = {
  a: 1,
  b: 2,
  c: 3 //초기값도 없고 value도 없으면 오류남. key가 있으면 무조건 value가 있어야 함. 객체 안에 c가 아예 없으면 undefined
}
console.log(x, y, z);

function objFnc({name, age}) {
  console.log(name);
  console.log(age);
}

const obj = {name: 'won', age: 10}

// objFnc(obj.name, obj.age)
objFnc(obj) // {name:name, age:age} = {name: 'won', age: 10} // 이거 아닌 것 같은데 ...