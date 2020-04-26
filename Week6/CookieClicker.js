var counter = document.getElementById("counter");
var suffix = document.getElementById("suffix");
var cookie = document.getElementById("cookie");
var timer = document.getElementById("timer");
var autocount = document.getElementById("autocount");
var click = document.getElementById("click");
var cookieclicked = document.getElementById("cookieclicked");

var upgrade1 = document.getElementById("upgrade1");
var upgrade2 = document.getElementById("upgrade2");
var upgrade3 = document.getElementById("upgrade3");
var upgrade4 = document.getElementById("upgrade4");
var upgrade5 = document.getElementById("upgrade5");
var upgrade6 = document.getElementById("upgrade6");
var upgrade7 = document.getElementById("upgrade7");

var purch2 = document.getElementById("purch2");
var purch3 = document.getElementById("purch3");
var purch4 = document.getElementById("purch4");
var purch5 = document.getElementById("purch5");
var purch6 = document.getElementById("purch6");
var purch7 = document.getElementById("purch7");

var gamelog = [" "]; document.getElementById("gamelog").innerHTML = gamelog;

counter = 0;
timer = 0;
autocount = 0;
cookieclicked = 0;

click = 1;
purch2 = 0;
purch3 = 0;
purch4 = 0;
purch5 = 0;
purch6 = 0;
purch7 = 0;

//   1 second timer.

setInterval(function () {
    timer = timer + 1;
    console.log(timer + " sec");
    console.log(counter + " --- cookies --- ")
    console.log(autocount + " auto")

    counter = counter + autocount;

}, 1000);

/// 1/10th second timer updates on screen information

setInterval(function () {

    // =========== this changes the word "cookies" depending on the number ===========
    if (counter == 0) {
        suffix = "cookies, so sad :'(";
    } else {
        if (counter == 1) {
            suffix = "lonesome cookie...";
        } else {
            if (counter > 1000) {
                suffix = "cookies!!!";
            } else {
                if (counter > 100) {
                    suffix = "cookies!!";
                } else {
                    if (counter >= 10) {
                        suffix = "cookies!";
                    } else {
                        if (counter >= 1) {
                            suffix = "cookies";
                        }
                    }
                }
            }
        }
    }
    //=====================================================================================


    ///// =========== cookie click =================================



    cookie.onclick = function cookieclick() {

        counter = counter + click;
        cookieclicked = cookieclicked + 1;
        console.log(counter + " --- cookies --- ")
        gamelog.unshift("Cookie Clicked " + cookieclicked + " times");
        document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
    }

    ///// =========== upgrade1 =================================
    if (counter >= 10) {
        document.getElementById("upgrade1").className = "upgradebutb";

        upgrade1.onclick = function upgrade1() {
            console.log("upgrade1 clicked")
            console.log(click)
            click = click + 1;
            counter = counter - 10;
            gamelog.unshift("+1 Click Purchased = " + click + " cookies per click");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }

    } else {
        document.getElementById("upgrade1").className = "upgradebuta";
        upgrade1.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade2 =================================
    if (counter >= 50) {
        document.getElementById("upgrade2").className = "upgradebutb";
        upgrade2.onclick = function upgrade2() {
            console.log("upgrade2 clicked")
            autocount = autocount + 1;
            counter = counter - 50;
            purch2 = purch2 + 1;
            document.getElementById("purch2").innerHTML = purch2;
            document.getElementById("purchbut2").className = "purchb";
            gamelog.unshift(purch2 + " Auto Click Purchased = " + (purch2 * 1) + " more cookies per second");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    } else {
        document.getElementById("upgrade2").className = "upgradebuta";
        upgrade2.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade3 =================================
    if (counter >= 100) {
        document.getElementById("upgrade3").className = "upgradebutb";
        upgrade3.onclick = function upgrade3() {
            console.log("upgrade3 clicked")
            autocount = autocount + 10;
            counter = counter - 100;
            purch3 = purch3 + 1;
            document.getElementById("purch3").innerHTML = purch3;
            document.getElementById("purchbut3").className = "purchb";
            gamelog.unshift(purch3 + " Hammer Purchased = " + (purch3 * 10) + " more cookies per second");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    } else {
        document.getElementById("upgrade3").className = "upgradebuta";
        upgrade3.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade4 =================================
    if (counter >= 1000) {
        document.getElementById("upgrade4").className = "upgradebutb";
        upgrade4.onclick = function upgrade4() {
            console.log("upgrade4 clicked")
            autocount = autocount + 100;
            counter = counter - 1000;
            purch4 = purch4 + 1;
            document.getElementById("purch4").innerHTML = purch4;
            document.getElementById("purchbut4").className = "purchb";
            gamelog.unshift(purch4 + " Anvil Purchased = " + (purch4 * 100) + " more cookies per second");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    } else {
        document.getElementById("upgrade4").className = "upgradebuta";
        upgrade4.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade5 =================================
    if (counter >= 10000) {
        document.getElementById("upgrade5").className = "upgradebutb";
        upgrade5.onclick = function upgrade5() {
            console.log("upgrade5 clicked")
            autocount = autocount + 1000;
            counter = counter - 10000;
            purch5 = purch5 + 1;
            document.getElementById("purch5").innerHTML = purch5;
            document.getElementById("purchbut5").className = "purchb";
            gamelog.unshift(purch5 + " Semi-Truck Purchased = " + (purch5 * 1000) + " more cookies per second");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    } else {
        document.getElementById("upgrade5").className = "upgradebuta";
        upgrade5.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade6 =================================
    if (counter >= 100000) {
        document.getElementById("upgrade6").className = "upgradebutb";
        upgrade6.onclick = function upgrade6() {
            console.log("upgrade6 clicked")
            autocount = autocount + 10000;
            counter = counter - 100000;
            purch6 = purch6 + 1;
            document.getElementById("purch6").innerHTML = purch6;
            document.getElementById("purchbut6").className = "purchb";
            gamelog.unshift(purch6 + " Small Moon Purchased = " + (purch6 * 10000) + " more cookies per second");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    } else {
        document.getElementById("upgrade6").className = "upgradebuta";
        upgrade6.onclick = function no() {
            console.log("not enough cookies!")
            gamelog.unshift("Not Enough Cookies!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }
    ///// =========== upgrade6 test =================================
    if (counter >= 0) {
        document.getElementById("upgrade7").className = "upgradebutb"

        upgrade7.onclick = function upgrade7() {
            console.log("upgrade7 clicked")
            purch7 = purch7 + 1;
            counter = counter + 100000;
            document.getElementById("purch7").innerHTML = purch7;
            document.getElementById("purchbut7").className = "purchb";
            gamelog.unshift("Test Purchased: You dirty cheater!");
            document.getElementById("gamelog").innerHTML = gamelog.join("<br>");
        }
    }

    // ========= updates screen inforamtion ===============

    document.getElementById("timer").innerHTML = timer;
    document.getElementById("counter").innerHTML = counter;
    document.getElementById("suffix").innerHTML = suffix;
    document.getElementById("autocount").innerHTML = autocount;
    document.getElementById("click").innerHTML = click;



}, 10);