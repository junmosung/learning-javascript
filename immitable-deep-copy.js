var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2]
  }
};

var copyObject = function(target) {
  var str = {};

  if (typeof target === "object" && target !== null) {
    for (prop in target) {
      console.log("target prop : " + prop);
      str[prop] = copyObject(target[prop]);
    }
  } else {
    str = target;
  }

  return str;
};

var obj2 = copyObject(obj);

if (obj !== obj2) {
  console.log("obj가 copy 되었습니다.");
}
obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
