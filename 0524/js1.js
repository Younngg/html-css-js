//객체
//리터럴 표기법

const cat = {
  name: 'momo',
  gender: 'male',
  age: 5,
  family: '러시안블루',
  sayHello: function() {
    console.log('hello ' + this.name + '입니다.');
  },
}

console.log(cat.name);
console.log(cat['age']);
cat.sayHello();

const man = {
  name: '김철수',
  age: 20,
  address: 'seoul',
}

console.log(man.age);
man.gender = 'male'; // man[gender] = 'male';
console.log(man);

