const a = 100;
const b = 200;
const hi = '안녕하세요';


export {a, b};
export default hi;

/* 
export default hi; 하나만 내보내기
모듈에서 Import시 새로운 이름으로 받을 수 있다.

export {a, b, hi} 여러개를 담아서 내보내기 할 수 있다. 
모듈에서 Import시 이름을 일치시켜줘야 한다. 
*/