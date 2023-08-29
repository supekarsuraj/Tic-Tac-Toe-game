//------------------------------------------------------------
// Accessing Data From First Page Section 

var url = window.location.href;
var XO = url.charAt(url.search(/ch=/) + 3);
var temp = XO;
var i = url.search(/\?p1=/) + 4;
var j = url.search(/\?p2=/) + 4;
var len = url.length;
var name_1 = url.substring(i, j - 4);
var name_2 = url.substring(j, len - 6);
var who = url.charAt(len - 1);
document.getElementById("names").innerHTML = name_1 + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp VS &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + name_2;
var tt = 0;
var ttt = 0;
if (who == 1) {
    document.getElementById("turn").innerHTML = name_1 + "'s Turn";
    tt = 1;
} else {
    document.getElementById("turn").innerHTML = name_2 + "'s Turn";
    tt = 2;
}
//-------------------------------------------------------------------------------------------------
function fun(e, chk) {
    if (XO == "") {
        alert("Select First !!");
        return;
    }
    if (chk == 1) {
        alert("Invalid Move");
    } else {
        e.innerHTML = XO;
        e.setAttribute("onclick", "fun(this,1);");
        ttt++;
        if (XO == 'X') {
            XO = 'O';
            e.classList.add('x');
        } else {
            XO = 'X';
            e.classList.add('o');
        }
        if (tt % 2 == 0) {
            document.getElementById("turn").innerHTML = name_1 + "'s Turn";
            tt++;
        } else {
            document.getElementById("turn").innerHTML = name_2 + "'s Turn";
            tt++;
        }
    }
    var millie = solve();
    console.log("Ans = " + millie);
    if (millie == 'X' || millie == 'O') {
        document.getElementById("over").style.display = "block";
        if (XO != temp) {
            if (who == 1) {
                document.getElementById("txtx").innerHTML = "Congratulation " + name_1 + " You Win";
            } else {
                document.getElementById("txtx").innerHTML = "Congratulation " + name_2 + " You Win";
            }
        } else {
            if (who == 1) {
                document.getElementById("txtx").innerHTML = "Congratulation " + name_2 + " You Win";
            } else {
                document.getElementById("txtx").innerHTML = "Congratulation " + name_1 + " You Win";
            }
        }
    }
    if (ttt == 9 && millie == false) {
        document.getElementById("over").style.display = "block";
        document.getElementById("txtx").innerHTML = "Game Draw !!";
    }
}

var arr = ["", "", "", "", "", "", "", "", ""];
function solve() {
    for (i = 1; i <= 9; i++) {
        var ii = "" + i;
        arr[i - 1] = (document.getElementById(ii).innerHTML);
    }
    if (arr[0] == arr[1] && arr[2] == arr[1] && arr[0] != "") {
        document.getElementById("1").classList.add("colr");
        document.getElementById("2").classList.add("colr");
        document.getElementById("3").classList.add("colr");
        return arr[0];
    } else if (arr[0] == arr[3] && arr[6] == arr[3] && arr[0] != "") {
        document.getElementById("1").classList.add("colr");
        document.getElementById("4").classList.add("colr");
        document.getElementById("7").classList.add("colr");
        return arr[0];
    } else if (arr[0] == arr[4] && arr[8] == arr[4] && arr[0] != "") {
        document.getElementById("1").classList.add("colr");
        document.getElementById("5").classList.add("colr");
        document.getElementById("9").classList.add("colr");
        return arr[0];
    } else if (arr[1] == arr[4] && arr[7] == arr[4] && arr[1] != "") {
        document.getElementById("2").classList.add("colr");
        document.getElementById("5").classList.add("colr");
        document.getElementById("8").classList.add("colr");
        return arr[1];
    } else if (arr[2] == arr[5] && arr[8] == arr[5] && arr[2] != "") {
        document.getElementById("3").classList.add("colr");
        document.getElementById("6").classList.add("colr");
        document.getElementById("9").classList.add("colr");
        return arr[2];
    } else if (arr[3] == arr[4] && arr[5] == arr[4] && arr[3] != "") {
        document.getElementById("4").classList.add("colr");
        document.getElementById("5").classList.add("colr");
        document.getElementById("6").classList.add("colr");
        return arr[3];
    } else if (arr[6] == arr[7] && arr[8] == arr[7] && arr[6] != "") {
        document.getElementById("7").classList.add("colr");
        document.getElementById("8").classList.add("colr");
        document.getElementById("9").classList.add("colr");
        return arr[6];
    } else if (arr[2] == arr[4] && arr[6] == arr[4] && arr[2] != "") {
        document.getElementById("3").classList.add("colr");
        document.getElementById("5").classList.add("colr");
        document.getElementById("7").classList.add("colr");
        return arr[2];
    } else {
        return false;
    }
}

function over() {
    for (let i = 1; i <= 9; i++) {
        let ii = "" + i;
        document.getElementById(ii).innerHTML = "";
    }
    document.getElementById("over").style.display = "none";
    location.reload();
}