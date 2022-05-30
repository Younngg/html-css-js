// get, set

/* const user = {
  name: '철수',
  age: 30,
  // ageMinus: this.age - 1,
  print: function() {
    console.log(`${this.name}입니다. ${this.age - 1}살입니다.`)
  }
} */

const user = {
  get nameOut() {
    return this._name;
  },// get은 데이터값을 가져오는 거구나~ 리턴이 꼭 있어야 함. 입력받으면 안 됨
  set nameIn(value) {
    if(value.length < 5) {
      console.log('글자수 확인해주세요');
      return;
    }
    this._name = value;
  } //set은 매개변수가 꼭! 하나여야 함. set은 입력, 수정 입력받은 값을 그냥 쓰는게 아니라 조건을 걸어서 쓸 수 있음
}

user.nameIn = "jiyoung";
console.log(user.nameOut);