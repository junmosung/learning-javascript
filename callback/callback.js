// call back은 나중에 실행하라고 인자로써 받을 함수에 함수를 넘겨주는 것이다.
// call back을 받은 함수가 자신의 역할에 따라서 받은 call back을 실행하는 것이다.

// 단순 내부에서만 연산되는 거면 동기적으로 실행하지만 외부 API(web api,서버에서 데이터 가지고 오거나, setTimeOut)에 콜백을 넘긴다면 call stack에 들어가서 실행되는 것이 아니라 que에 들어간다.
// 2020.02.16 goodnote 참조

const fakeSetTimeout = function(fallback, delay){
    fallback();
}
console.log(0)

fakeSetTimeout(function () {
    console.log("call stack에서 바로 실행한다.")
}, 0);

console.log(1);