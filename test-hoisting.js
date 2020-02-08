console.log(sum(10,10));
console.log(multiplication(10,10));

function sum(x,y){
  return x+y;
}
var multiplication = function(x,y){
  return x*y;
}

// --------------------------------------------------- 아래와 같이 호이스팅이 발생한다.
// var sum = function sum(x,y){
//   return x+y;
// }
// var multiplication;

// console.log(sum(10,10));
// console.log(multiplication(10,10));

// multiplication = function(x,y){
//   return x*y;
// }