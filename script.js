
const hour = document.querySelector(".hours")
const mins = document.querySelector(".minutes")
const second = document.querySelector(".seconds")

function setTime(){
    const now =new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    hour.textContent = hours
    mins.textContent = minutes
    second.textContent = seconds
}


setInterval(setTime,1000)