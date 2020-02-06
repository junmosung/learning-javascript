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

console.log(user.name, user2.name);
console.log(user === user2);