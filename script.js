const button = document.getElementById("mybutton");
button.addEventListener("click", function () {
    alert('button clicked');
})

/*
const button2 = document.getElementById("mybutton2");
button2.addEventListener("click", function changeBackground(color) {
    document.body.style.background = "red";
})
*/

/*
const button2 = document.getElementById("mybody");
document.getElementById("mybody").classList.toggle("mystyle");
button2.addEventListener("click", function changeBackground(color) {
    document.body.style.background = "red";
})
*/

function myFunction() {
    let body = document.getElementById("mybody");
    body.classList.toggle("mystyle");
}