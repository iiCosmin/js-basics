setInterval(setClock, 1000)

const hourHand = document.querySelector ('[data-hour-hand]')
const minuteHand = document.querySelector ('[data-minute-hand]')
const secondHand = document.querySelector ('[data-second-hand]')

function setClock() {
    axios.get('http://worldtimeapi.org/api/timezone/Europe/Vilnius')
    .then((response) => {
        const currentDate = new Date(response.data.datetime); 
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes ()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    });

    
}

function setRotation(element, rotationRatio) {
    element.style.setProperty ('--rotation', rotationRatio * 360)
}

setClock()


setInterval(setClock2, 1000)

const hour2Hand = document.querySelector ('[data-hour-hand2]')
const minute2Hand = document.querySelector ('[data-minute-hand2]')
const second2Hand = document.querySelector ('[data-second-hand2]')

function setClock2 () {
    axios.get('http://worldtimeapi.org/api/timezone/Europe/Monaco')
    .then((response) => {
        const currentDate2 = new Date(response.data.datetime); 
    const seconds2Ratio = currentDate2.getSeconds() / 60
    const minutes2Ratio = (seconds2Ratio + currentDate2.getMinutes()) / 60
    const hours2Ratio = (minutes2Ratio + currentDate2.getHours()) / 12
    setRotation(second2Hand, seconds2Ratio)
    setRotation(minute2Hand, minutes2Ratio)
    setRotation(hour2Hand, hours2Ratio)
});


}

function setRotation(element, rotationRatio) {
    element.style.setProperty ('--rotation', rotationRatio * 360)
}

setClock2()