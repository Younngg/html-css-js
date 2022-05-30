// let product1 = {item: 'book', price: 15000}
// let product2 = {item: , price: 25000}
// let product3 = {item: , price: 2000}

// 가격 * 0.4로 text 출력

function Product(item, price) {
  this.item = item;
  this.price = price;
}

Product.prototype.tax = function() {
  return this.price * 0.1
} // 프로토타입에 만들면 인스턴스 오브젝트가 값을 갖고 있는 것은 아니라 참조를 하는 것. 값을 직접 소유하게 만들고 싶으면 constructor에 만들기

const product1 = new Product('book', 15000) //얘네 부모만 프로토타입을 갖고 있고, 인스턴스 오브젝트는 프로토타입이 없다. 생성자 함수만 갖고 있음
const product2 = new Product('game', 25000)
const product3 = new Product('cd', 2000)

console.log(product1.tax());
console.log(product2.tax());
console.log(product3.tax());

//인스턴스에서 부모가 갖고 있는 프로토타입 확인하는 방법
console.log(product1.__proto__);