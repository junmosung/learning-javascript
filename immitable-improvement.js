var user = {
  name : "victor",
  age : 100
}

var changName = function(user, newName){
  return {
    name : newName,
    age: user.age
  }
}

var user2 = changName(user, "invincible");

if(user !== user2){
  console.log("유저가 변경되었습니다.");
}

console.log(user.name, user2.name); // invincible, invincible
console.log(user === user2); // true