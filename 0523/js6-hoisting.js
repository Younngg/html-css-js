world();

const hello = function () {
  console.log("hello");
}

const goodbye = () => {console.log("bye")}

const hi = function hiFnc() {
  console.log("hi");
}
function world(){
  console.log("world");
}
hello();
goodbye();
hi(); //함수 표현식은 위로 올리면 const라 에러뜸 선언식만 호이스팅할때 값이 나옴
