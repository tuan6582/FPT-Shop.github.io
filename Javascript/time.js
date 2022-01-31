var fullTime = new Date('February 2, 2022 00:00:00').getTime();

setInterval(function () {

    var Now = new Date().getTime();
    var D = fullTime - Now;
    var Days = Math.floor(D / (1000 * 60 * 60 * 24))
    var Hours = Math.floor(D / (1000 * 60 * 60))
    var Minutes = Math.floor(D / (1000 * 60))
    var Sec = Math.floor(D / (1000))

    Hours %= 24;
    Minutes %= 60;
    Sec %= 60;

    document.getElementById('days').innerHTML = Days
    document.getElementById('hours').innerHTML = Hours
    document.getElementById('minutes').innerHTML = Minutes
    document.getElementById('sec').innerHTML = Sec

}, 1000)



