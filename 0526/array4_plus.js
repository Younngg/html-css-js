const color = ['red', 'green', 'blue', 'yellow'];
color.shift(); // 맨 앞에 제거
console.log(color);
color.pop(); // 맨 뒤 제거
console.log(color);

const famName = ['철수', '영희', '순희', '길동'];
famName.splice(2, 1); // 특정 번호 제거
console.log(famName);

const newFamName = famName.slice(2, 3);
console.log(famName);
console.log(newFamName);

//string이 유사 배열이라 배열과 같은 함수 쓰는 것???

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6, 7, 8, 9] //concat 사용하여 합치기
const arrPlus = arr1.concat(arr2);
console.log(arrPlus);

const arrReverse = arrPlus.reverse();
console.log(arrReverse); // 거꾸로 정렬

let multiArray = [['a', 'b', 'c'], ['가', '나', '다', ['산', '바다']]];

console.log(multiArray); // flat() 중첩된 배열을 합친다. 

const a = multiArray.flat(1);
console.log(a); 

const txtJoin = a.join('/'); // 배열을 문자로 합칠 때
console.log(txtJoin);