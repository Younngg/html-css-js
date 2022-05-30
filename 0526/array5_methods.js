const year = ['2022', '2023', '2024', '2024']

console.log(year.indexOf('2024')); // 인덱스 번호 반환
console.log(year.includes('2024')); // 배열 안에 있는지 없는지
console.log(Array.isArray(year)); // array인지 아닌지

const value = year.indexOf('2026');

if(value !== -1) {
  console.log('값이 있다');
} else {
  console.log('값이 없다');
}