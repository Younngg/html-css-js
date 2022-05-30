// 논리합or || 논리곱and && 연산자를 이용한 단축평가
// 좌항 우항 평가가 된다. 2개의 피연산자 중 어느 하나의 값으로 평가 된다.
// 평가된 값은 형변환 하지 않고 현재 값을 반환한다

//논리합 ||

console.log(true || true); //true
console.log(60 || 50); // 좌항도 참이고 우항도 참일 때 좌항에서 평가가 먼저 끝남. 불린값으로 나오지 않고 값 그대로 나온다
console.log(true || false); //true
console.log(10 || 0); //10
console.log(false || true); //true (우항까지 계산)
console.log(false || false); //false (우항까지 계산)
console.log(0 || ''); //''(우항까지 계산)

//논리곱 &&
console.log(true && true);
console.log(300 && 500);
console.log(false && true);
console.log(0 && 500);
console.log(true && false);
console.log(1 && null);

// 부정연산
console.log(!10)
console.log(!!10)
console.log(!'')