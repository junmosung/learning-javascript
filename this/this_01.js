var a = 1;

// console.log(this.a);
// console.log(a);
// console.log(window.a);

// 자바스크립트의 모든 변수는 실은 특정 객체의 프로퍼티로서 동작한다.
// 즉 전역변수를 선언하면 자바스크립트 엔진은 이를 전역객체의 프로퍼티로 할당한다.

var name = "victorsung";

function outer(){
    console.log(`outer에서 전역에서 가지고온 name = ${name}`);
    function innner() {
        console.log(`inner에서 전역에서 가지고온 name = ${name}`);
        var innerVar = "내부변수";
    }

    innner();

}

outer();
console.log(innerVar);