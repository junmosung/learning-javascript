function a(x) {
  console.log(x);
  var x;
  console.log(x);
  var x = 2;
  console.log(x);
}

// a(1);

function b() {
  console.log(c());
  var c = "ccc";
  console.log(c);
  function c() {}
  console.log(c);
}

b();
