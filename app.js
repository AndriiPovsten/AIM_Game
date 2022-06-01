let startBtn = document.querySelector('#start')
let timeList = document.querySelector('#time-list')
let colors = ['green', 'blue', 'yellow', 'black', 'white', 'red', 'silver']
let time = 0
let score = 0
let board = document.querySelector('#board')
let timeEl = document.querySelector('#time')
let screens = document.querySelectorAll('.screen')
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event =>{
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()

    }
})
function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}
function decreaseTime() {
    if (time === 0){
        finishGame()

    }else {
        curent = --time
        if (curent < 10) {
            curent = `0${curent}`
        }
    }
    setTime(curent)
}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`

}
function finishGame(){
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Your Score: <span class="primary"> ${score}</span></h1>`

}
function createRandomCircle(){
    let color = getColor()
    let circle = document.createElement('div')
    let size = getRandomNumber(10, 60)
    let {width, height} = board.getBoundingClientRect()
    let x = getRandomNumber(0, width - size)
    let y = getRandomNumber(0, height - size)
    circle.classList.add('circle')
    circle.style.backgroundColor = color
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}
function getRandomNumber(min, max){
    return Math.round(Math.random() *(max - min) + min)
}
function getColor(){
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}