var btn = document.querySelector("button");

console.log(btn.addEventListener('click',function () {
    console.log(this);
}));
