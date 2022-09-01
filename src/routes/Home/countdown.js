var count = new Date("01 october 2022 15:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = count - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (typeof window !== "undefined") {
        document.getElementById("counterDaysLeft").innerHTML = days;
    }
    if (typeof window !== "undefined") {
        document.getElementById("counterHoursLeft").innerHTML = hours;
    }
    if (typeof window !== "undefined") {
        document.getElementById("counterMinutesLeft").innerHTML = minutes;
    }
    if (typeof window !== "undefined") {
        document.getElementById("counterSecondsLeft").innerHTML = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        if (typeof window !== "undefined") {
            document.getElementById("counter-circles").style.display = "none";
        }
        if (typeof window !== "undefined") {
            document.getElementById("expired").innerHTML = "Let's go Party!";
        }
    }
}, 1000);
