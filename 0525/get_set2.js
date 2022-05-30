// 숫자를 입력 받아서 + 10

const plus = {
  get plusOut() {
    return `출력값은 ${this.num + 10}입니다.`;
  },
  set plusIn(value) {
    this.num = value;
  }
}

plus.plusIn = 10;
console.log(plus.plusOut);
// 입력 받았을 때 입력된 값을 걸러줄 수 있고, 오브젝트가 여러겹으로 맵핑되어있지 않고 꺼내기 쉬움 손쉽게 값을 받을 수 있음