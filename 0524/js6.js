const parent = {
  name: 'kim',
  age: 50
}

/* 
parent 상속받은 오브젝트 만들고 싶을 때
1. 생성자 함수로 만든다. constructor로 만든다.
2. Object.create() 로 만든다. Object. 모든 오브젝트를 만들 때 기본으로 하는 생성자 함수. es5에서 만들어짐
*/

const child = Object.create(parent);

console.log(child); //부모 요소의 프로토타입을 가져다 쓴 거라서 값이 나오지 않음. 
console.log(child.name); // kim
console.log(child.age); // 50


const item = {title: 'TEE', price: 5000};
const itemChild = Object.create(item);
itemChild.price = 7000;

console.log(itemChild.price);
console.log(itemChild); // price는 부모에게도 있고, 나에게도 있는데 나한테 있으면 우선으로 적용됨. 

const itemChildChild = Object.create(itemChild);
console.log(itemChildChild.price);

//es6에서는 class