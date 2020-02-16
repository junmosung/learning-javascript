// javascript에서 클로져는 선언과 연관이 있고 this는 호출과 연관이 있다.

// scope는 funtion으로 형석된다.
// scope chain은 하위에서 상위까지 쭉 연결됨을 뜻한다.
// 클로져 = func는 inner function을 return받았다. 그 inner function은 x라는 변수를 알고 있다.

// var x ="Y"
//
// function outer() {
//     var x = "X";
//     function inner() {
//         console.log(x);
//     }
//
//     return inner;
// }
//
// var func = outer();
// func();

// ========================================================== this는 호출한 놈이다.

var someone = {
    whoAmI : function(){
        console.log(this)
    },
    name : "JUN"
}
//
// var test = {
//     name : "test"
// }
//
// someone.whoAmI();   // 호출한놈은 someone이다.
//
// var testWhoAmI = someone.whoAmI;
// testWhoAmI();   // 호춯한놈은 global이다.
//
// var bindWhoAmI = someone.whoAmI.bind(test);
// bindWhoAmI();

const btn = document.querySelector("button");
btn.addEventListener("click", someone.whoAmI.bind(someone));