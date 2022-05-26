const color = ['red', 'green', 'blue'];

console.log(color.unshift('yellow')); //제일 앞에 추가
console.log(color.push('yellow')); //뒤에 추가
console.log(color);

console.log(color.splice(2,0,'sky','black')); //중간에 추가
console.log(color);
