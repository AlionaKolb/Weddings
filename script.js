const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// дата предстоящего события (год, месяц, число)
const eventDate = new Date(2024, 7, 12);



function timeToEvent() {
    // текущая дата
    const now = new Date();

    const diff = eventDate - now;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    /*const now = new Date();
    let output = '';
    // количество дней до события
    let daystoED = Math.floor(Math.round(eventDate - now) / 86400000);
    daystoED = (daystoED < 1) ? "0" + daystoED : daystoED;
    // количество часов до события
    let hourstoED = 24 - now.getHours() - 1;
    hourstoED = (hourstoED < 10) ? "0" + hourstoED : hourstoED;
    // количество минут до события
    let minutestoED = 60 - now.getMinutes() - 1;
    minutestoED = (minutestoED < 10) ? "0" + minutestoED : minutestoED;
    // количество секунд до события
    let secondstoED = 60 - now.getSeconds() - 1;
    secondstoED = (secondstoED < 10) ? "0" + secondstoED : secondstoED;
    //сообщение
    output = daystoED + " дн. " + hourstoED + " час. " + minutestoED + " мин. " + secondstoED + " сек.";
    return output;*/
}

/*window.onload = function() {
    const diff = eventDate - now;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;
    console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    days.innerText = daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;


if (now < eventDate) {
    window.setInterval(function() {
            span.innerHTML = timeToEvent(eventDate);
        }, 1000);
        setInterval(timeToEvent, 1000);
    }
}*/

setInterval(timeToEvent, 1000);