const dayCountdownDisplay = document.getElementById("day-countdown-display")
const hourCountdownDisplay = document.getElementById("hour-countdown-display")
const minuteCountdownDisplay = document.getElementById("minute-countdown-display")
const secondCountdownDisplay = document.getElementById("second-countdown-display")

function renderCountdown(){
    const christmasDay = 25
    const christmasHour = 24
    const christmasMinute = 60
    const christmasSecond = 60
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
    const currentDay = new Date().getDate()
    const christmasDayCountdown = christmasDay - currentDay
    
    const currentHour = new Date().getHours()
    const christmasHourCountdown = christmasHour - currentHour
    
    const currentMinute = new Date().getMinutes()
    const christmasMinuteCountdown = christmasMinute - currentMinute
    
    const currentSecond = new Date().getSeconds()
    const christmasSecondCountdown = christmasSecond - currentSecond
    
    dayCountdownDisplay.innerText = christmasDayCountdown
    hourCountdownDisplay.innerText = christmasHourCountdown
    minuteCountdownDisplay.innerText = christmasMinuteCountdown
    secondCountdownDisplay.innerText = christmasSecondCountdown
}
 
setInterval(() => renderCountdown(), 1000)

// Stretch goals:
// - Display hours, minutes, seconds.