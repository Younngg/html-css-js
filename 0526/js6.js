// date 객체 이용해서 년월일요일 -> 2022년 5월 26일 목요일 나오게 해보세요


  let date = new Date();
  let day = ['일', '월', '화', '수','목', '금', '토'];
  let today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${day[date.getDay()]}요일`;
  console.log(today);
