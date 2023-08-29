var foo = 0;
var intervalId = window.setInterval(function () {
    var a = document.getElementById("c1").checked;
    var b = document.getElementById("c2").checked;
    if (a == true) {
        var x = document.getElementById("player1").value;
        foo = 1;
    }
    if (b == true) {
        var x = document.getElementById("player2").value;
        foo = 2;
    }
    document.getElementById("txt").innerHTML = "Choose for " + x;
    var qwe = document.getElementById("b1").style.focus;
    console.log(qwe);
}, 2000);
var XO = '';
function set(e, ch) {
    console.log(ch);
    XO = ch;
    document.getElementById("doo").href = "./HTML/xo.html" + "?ch=" + XO;
}
var xx = 88;
function done() {
    if (xx == 88)
        return false;
    else
        return true;
}
function changeXX(e) {
    console.log("Hellllo");
    var p = document.getElementById("player1").value;
    var q = document.getElementById("player2").value;
    if (p == "") {
        document.getElementById("req").style.visibility = "visible";
        document.getElementById("doo").href = "#";
    }
    if (q == "") {
        document.getElementById("req1").style.visibility = "visible";
        document.getElementById("doo").href = "#";
    } else {
        document.getElementById("doo").href = "./HTML/xo.html" + "?ch=" + XO + "?p1=" + p + "?p2=" + q + "?who=" + foo;
    }
    if (XO == '') {
        document.getElementById("req2").style.visibility = "visible";
        document.getElementById("doo").href = "#";
    }
}