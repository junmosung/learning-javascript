var a = 1;
var outer = function(){
  var inner = function(){
    console.log(a);
    var a = 3;
  }
  inner(); 
  console.log(a); 
}

outer();
console.log(a);

var a = 1;

var outer = function () {
    console.log(a);
    var inner = function () {
        console.log(a);   // 이 부분이 undefined인 이유가 무엇인가요?? // 밑에 var a = 3이라고 선언해서 변수 a가 호이스팅 되어 undefined이다.
        var a = 3;
    }
    inner();
    console.log(a);
}

outer();
console.log(a)