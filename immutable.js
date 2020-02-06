var user = {
  name : "victor",
  age : 100
}

var changName = function(user, newName){
  var newUser = user;
  user.name = newName;
  return newUser;
}

var user2 = changName(user, "invincible");

if(user !== user2){
  console.log("유저가 변경되었습니다.");
}

console.log(user.name, user2.name); // invincible, invincible
console.log(user === user2); // true

// 문제점 : 정보가 바뀐 시점에 알림을 보내야 한다거나, 바뀌기 전의 정보와 바뀐 후의 정보의 차이를 
// 가시적으로 보여줘야 하는 등의 기능을 구현하려면 변경 전화 후에 서로 다른 객체를 바라보게 만들어야 한다.