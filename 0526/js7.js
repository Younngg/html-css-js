let array = [1,2,3,4,5];

function arrFnc(arrlist){
  arrlist.forEach((data, index, arr) => {
    console.log(`data: ${data}, index: ${index}, array: ${arr}`)
  })
}

arrFnc(array);