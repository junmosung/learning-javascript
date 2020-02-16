var user = {
  name : "victor",
  age : 100
}

var copyObject = function(target){
  var str = {};
  for(prop in target){
    str[prop] = target[prop]
  }
  return str;
}

var user2 = copyObject(user);
user2.name = "invincible";

if(user !== user2){
  console.log("유저가 변경되었습니다.");
}

console.log(user.name, user2.name); // invincible, invincible
console.log(user === user2); // true