# 자바스크립트 공부한 내용 정리

* 불변객체
  * 객체의 변경이 일어나도 원본 객체는 변하지 않는 것

immutable.js -객체의  가변성에 따른 문제점
* 참조형 데이터의 '가변'은 데이터 가체가 아닌 내부 프로퍼티를 변경할 때만 성립한다. 데이터 자체를 변경하고자 하면 기본형 데이터와 마찬가지로 기존 데이터는 변하지 않는다.

immitable-improvement.js - 새로운 객체를 반환하여 가변성 문제를 해결한다.

 ## 얕은 복사 ( shallow copy )
 immitable-shallow-copy - 중복된 내용을 없애기 위해 copy하는 객체를 만든다.
 * 해당 소스는 객체안에 있는 객체는 복사 할 수 없는 문제점이 발생한다. 즉 참조형 데이터는 다시 그 내부의 프로퍼티들을 다시 복사해야한다.

 ## 깊은 복사 ( deep copy )
 immitable-deep-copy - 재귀
immitable-deep-copy-json  - json사용
