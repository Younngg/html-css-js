class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hi() {
    console.log(`${this.name}입니다. ${this.age}살이에요`);
  }
}

const user1 = new User('지영', 24)
console.log(user1)
user1.hi()

//클래스 확장 extends
//b를 가지고 a를 확장
class addUserLocation extends User {
  constructor(name, age, location){
    super(name, age); // 이걸 넣어야 확장이 됨. 유저라는 클래스를 뜻함. 부모클래스(user)를 상속하는 키워드 
    this.location = location;
  }// 바뀌는 내용이 없으면 constructor 안 적어도 됨. constructor는 한 클래스당 하나만 만들 수 있음
  hi(){
    console.log(`유저의 위치는 ${this.location}입니다.`);
  } // 바뀌는 내용이 없으면 hi만 불러와도 됨. 바꾸면 덮어쓰기(오버라이딩)됨
}

const user2 = new addUserLocation('지영', 25, '서울');
user2.hi();
console.log(user2);

class addUser extends User {
  constructor(name, age, location){
    super(name, age); // 이걸 넣어야 확장이 됨. 유저라는 클래스를 뜻함. 부모클래스(user)를 상속하는 키워드 
    this.location = location;
  }// 바뀌는 내용이 없으면 constructor 안 적어도 됨. constructor는 한 클래스당 하나만 만들 수 있음
  hi(){
    super.hi();
    console.log(`안녕하세요 현재 유저의 위치는 ${this.location}입니다.`)
  } // 위에 있는 원형 확장, 덮어쓰기 안 됨
}

const user3 = new addUser('지호', 23, '서울');
console.log(user3);
user3.hi();

//dog 

class Dog {
  constructor(color, weight, gender) {
    this.color = color;
    this.weight = weight;
    this.gender = gender;
  }
}

class Cat extends Dog {
  constructor(color, weight, gender, name) {
    super(color, weight, gender);
    this.name = name;
  }
}