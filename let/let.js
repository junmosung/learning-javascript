// var는 function에서 scope를 가진다. 즉 var는 가장 가까운 function에 들어간다.
// let, const는 { } 중괄호에서 scope를 가진다. 즉 let은 가장 가까운 중괄호 scope에 들어간다.

function test() {
    var a = "a";
    {
        let t = "test";
        console.log(t);
    }
    console.log(a);
}

test();