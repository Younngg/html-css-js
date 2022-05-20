let i = 1;

//while
while(i <= 50){
  if(i % 2 === 0 && i % 7 === 0){
    console.log(i);
  }
  i++;
}

//do..while
while(i <= 10){
  console.log('문장반복출력');
  i++;
}

do{
  i++;
  console.log('문장반복출력');
} while(i<=10);