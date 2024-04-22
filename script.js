window.onload = function() {
    // текущая дата
    let now = new Date();
    // дата предстоящего события (год, месяц, число)
    const eventDate = new Date(2024, 7, 12);
    const span = document.getElementById('timetoevent');
    let text = "До свадьбы осталось: ";

    let div = document.getElementById('event-mess');
    // если событие еще не наступило
    if (now < eventDate) {
        div.firstChild.nodeValue = text;
        window.setInterval(function() {
            span.innerHTML = timeToEvent(eventDate);
        }, 1000);
    }
}

function timeToEvent(eventDate) {
    const now = new Date();
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
    return output;
}