// 생성자 함수를 사용해서 여러개의 오브젝트를 만들어서 사용
// prototype을 이용해서 상속을 받아서 값을 참조
// => ES6 클래스 Class

class User {
  constructor(name, age){
    this.name = name;
    this.age = age;
    /* this.hi = function() {
      console.log("안녕하세요. " + this.name + "입니다. 나이는 " + this.age + "입니다.")
    } */
  }
  hi(){
    console.log("안녕하세요. " + this.name + "입니다. 나이는 " + this.age + "입니다.")
  }
} //생성자 함수와 프로토타입 상속 함수를 같이 적을 수 있음 더 명시적이고 간단함

const user1 = new User('지영', 24);
const user2 = new User('순희', 20);

console.log(user1)
user1.hi();
console.log(User.prototype);

// people 1 {name: '새싹'}
// hello 반갑습니다 welcome 방문해주셔서 감사합니다. 메소드 두개

class People {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`${this.name} 반갑습니다.`);
  }
  welcome() {
    console.log(`${this.name} 방문해주셔서 감사합니다.`);
  }
}

const people1 = new People('새싹');

console.log(people1); //Object.getPrototypeOf(people1)
people1.hello();
people1.welcome();
console.log(Object.getPrototypeOf(people1));