let rc = import('/js/randomColor');

function key_pressed(e) {
        document.getElementById("body").style.color = rc.randomColor();
        alert(randomColor());
        document.getElementById("body").style.background = rc.randomColor();
}

window.addEventListener("keydown", function (e) {
    //tested in IE/Chrome/Firefox
key_pressed()
});
