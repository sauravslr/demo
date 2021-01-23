const durationInput = document.querySelector('#duration')
const startButton = document.querySelector('#start')
const pauseButton = document.querySelector('#pause')
const circle = document.querySelector('circle')
const perimeter = circle.getAttribute('r') * Math.PI * 2
circle.setAttribute('stroke-dasharray',perimeter)

let duration
const timer = new Timer(durationInput,startButton,pauseButton,{
    onStart(totalduration){
        duration = totalduration
    },
    onTick(timeRemaining){
        circle.setAttribute('stroke-dashoffset',perimeter * timeRemaining/duration - perimeter )
    },
    onComplete(){
        console.log('timer reached zero')
    }
})
