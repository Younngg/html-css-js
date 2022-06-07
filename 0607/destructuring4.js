let product = {
  shape:{
    width:150,
    height:100,
    weight: 50,
  },
  color:['red', 'green', 'yellow']
}

//console.log(product.shape.width);

let {shape:{width, height, weight}, color:[topColor, bottomColor, sideColor]} = product;

console.log(topColor);
console.log(height);
