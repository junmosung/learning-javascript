# 자바스크립트 공부한 내용 정리

## function
```
자바스크립트에서 function의 return 값을 선언하지 않으면 undefined를 return한다.
```

 # 1. 불변객체
객체의 변경이 일어나도 원본 객체는 변하지 않는 것
```
immutable.js -객체의  가변성에 따른 문제점 파악

- 참조형 데이터의 '가변'은 데이터 가체가 아닌 내부 프로퍼티를 변경할 때만 성립한다. 데이터 자체를 변경하고자 하면 기본형 데이터와 마찬가지로 기존 데이터는 변하지 않는다.

immitable-improvement.js - 새로운 객체를 반환하여 가변성 문제를 해결한다.
```

### 얕은 복사 ( shallow copy )
```
immitable-shallow-copy - 중복된 내용을 없애기 위해 copy하는 객체를 만든다.

해당 소스는 객체안에 있는 객체는 복사 할 수 없는 문제점이 발생한다. 즉 참조형 데이터는 다시 그 내부의 프로퍼티들을 다시 복사해야한다.
```

### 깊은 복사 ( deep copy )
```
immitable-deep-copy - 재귀
immitable-deep-copy-json  - json사용
```

# 2. 호이스팅
hoisting.js

## 함수 선언문(function declaration)과 함수 표현식(function expression)

* function declaration - 함수의 선언부는 전체를 호이스팅한다.
* function expression - 함수도 하나의 값으로 취급한다. 즉 함수를 다른 변수에 값으로 할당할 수 있다.

```javascript
function a() {} // 함수 선언문

var a = function(){}  // 함수 익명표현식

var a = function c(){}  // 함수 기명표현식
```


예시: 호이스팅 전
```javascript
console.log(sum(10,10));  
console.log(multiplication(10,10));

function sum(x,y){
  return x+y;
}

var multiplication = function(x,y){
  return x*y;
}
```
예시: 호이스팅 후
```javascript
var sum = function sum(x,y){
  return x+y;
}
var multiplication;

console.log(sum(10,10));  // function decalaration은 전체를 호이스팅하여 정상적으로 실행된다.
console.log(multiplication(10,10)); // function expression은 변수 선언부만 호이스팅된다. 즉 var multiplication; 만 끌어올려짐으로 TypeError가 발생한다.

multiplication = function(x,y){
  return x*y;
}
```
# 3. scope
식별자에 대한 유효범위

# 4. 실행컨텍스트
실행할 코드에 제공할 환경 정보들을 모아놓은 객체