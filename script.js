calculateTime = () => {
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let dayNames = ['ВOC', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СУБ'];
    /////////////
    let second = date.getSeconds();
    /////////////
    // hour = hour % 12;
    // hour = hour ? hour : '12';
    // hour = hour < 10 ? '0' + hour : hour;
    // minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    ////////////

    document.querySelector('#day').textContent = dayNames[dayNumber];
    document.querySelector('#hour').textContent = hour;
    document.querySelector('#minute').textContent = minute;
    document.querySelector('#ampm').textContent = ampm;
    document.querySelector('#second').textContent = second;

    setTimeout(calculateTime, 1000);

}

window.addEventListener('load', calculateTime)