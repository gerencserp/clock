"use strict";

(() => {

    function colorClock() {
        let date = new Date();
        let year = date.getFullYear();
        if (year < 10) {
            year = '0' + year;
        }
        let month = date.getMonth() + 1;
        if (month < 9) {
            month = '0' + month;
        }
        let day = date.getDate();
        if (day < 10) {
            day = '0' + day;
        }
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        let minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        document.getElementById('year').innerHTML = year + '.';
        document.getElementById('month').innerHTML = month + '.';
        document.getElementById('day').innerHTML = day + '.';
        document.getElementById('hours').innerHTML = hours + ':';
        document.getElementById('minutes').innerHTML = minutes + ':';
        document.getElementById('seconds').innerHTML = seconds;

        setTimeout(colorClock, 1000);
    }
    colorClock();

})();