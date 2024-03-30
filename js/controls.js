
export default function Controls({
    buttonPlay, 
    buttonPause,
    buttonSet,
    buttonStop
}) {

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')

    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function reset() {
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt('Quantos minutos?')
        if (!newMinutes) {
            return false
        }if(newMinutes == undefined) {
         return newMinutes   
        }
         

        return newMinutes
    }




    return {
        reset,
        play,
        pause,
        getMinutes,
        
    }
}

