//array
//생성자로 만드는 법, 표현식(리터럴) 방법

//생성자 new Array(length)
let array = new Array(3);
array[0] = 'A';
array[1] = 'B';
array[2] = 'C';
console.log(array);

//new Array(인수)
let array2 = new Array(1,2,3);
console.log(array2);

//표현식
let array3 = [1, 2, 3, 4, 5];
console.log(array3);

let array4 = new Array(10); // 숫자가 두개일때는 상관 없지만, 숫자가 하나일 때는 배열의 길이로 인식함
console.log(array4) 
let array5 = new Array('go'); // 문자일때는 알아서 들어감
console.log(array5)
