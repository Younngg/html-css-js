
function People(name, age) {
  this.name = name;
  this.age = age;
  this.address = 'seoul'
  //name: '김철수',
  //age: 20,
  //address: 'seoul',
}

const people1 = new People('지영', 24)
const people2 = new People('철수', 10)

console.log(People);

function Circle(r) {
  this.radius = r;
  this.getDiameter = function(){
    return this.radius * 2
  }
}

const circle1 = new Circle(5)
const circle2 = new Circle(10)
console.log(circle2.getDiameter())
console.log(circle1)

// 이름, 국, 영, 수 값을 받아 국영수의 평균을 리턴

function Aveg(name, kor, eng, math) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.math = math;
}

Aveg.prototype.result = function(){
  return (this.kor + this.eng + this.math) / 3
}

const kim = new Aveg('kim', 100, 90, 100);
const lee = new Aveg('lee', 90, 90, 90);
const park = new Aveg('park', 60, 60, 60);

console.log(kim);
console.log(lee);
console.log(park);

console.log(kim.result()); // result메서드는 없지만 부모의 부모(프로토타입)가 갖고 있기 때문에 값이 나옴
console.log(lee.result());
console.log(park.result());

console.log(Aveg.prototype); // Object 객체가 갖고 있는 프로토타입을 상속 받고 있음