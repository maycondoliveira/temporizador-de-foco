
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
} from "./elements.js"

import Sounds from "./sounds.js"



function resetControls() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}


export default function Timer({
    minutesDisplay,
    secondsDisplay,
}) {

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)


    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")

    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0

            updateDisplay(minutes, 0)

            if (isFinished) {

                updateDisplay(minutes)
                Sounds().timeEnd()
                reset()
                resetControls()


                return
            }


            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            updateDisplay(minutes, String(seconds - 1))

            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }



    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold,


    }

}