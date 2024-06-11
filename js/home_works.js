//GMAIL CHECKER

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^\w+@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    } else {
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
}

//BLOCK MOVEMENT

const parentBlock = document.querySelector('.parent_block')
const redBlock = document.querySelector('.child_block')

let positionX = 0, positionY = 0;

const offsetParentWidth = parentBlock.offsetWidth - redBlock.offsetWidth
const offsetParentHeight = parentBlock.offsetHeight - redBlock.offsetHeight
const mover = () => {
    if (positionX < offsetParentWidth && positionY === 0) {
        positionX++
        redBlock.style.left = `${positionX}px`;
        requestAnimationFrame(mover)
    } else if (positionX === offsetParentWidth && positionY < offsetParentHeight) {
        positionY++
        redBlock.style.top = `${positionY}px`;
        requestAnimationFrame(mover)
    } else if (positionX <= offsetParentWidth && positionX > 0 && positionY === offsetParentHeight) {
        positionX--
        redBlock.style.left = `${positionX}px`;
        requestAnimationFrame(mover)
    } else if (positionX === 0 && positionY <= offsetParentHeight) {
        positionY--
        redBlock.style.top = `${positionY}px`;
        requestAnimationFrame(mover)
    }
}
mover()

//WATCH

const startBTN = document.querySelector('#start')
const stopBTN = document.querySelector('#stop')
const resetBTN = document.querySelector('#reset')
const timeDiv = document.querySelector('#seconds')

let i = 0, f = 0

const addition = () => {
    i++
    timeDiv.innerHTML = i
}

const startCount = () => {
    if (!f) {
        f = setInterval(addition, 1000)
    }
}

const stopCount = () => {
    clearInterval(f)
    f = false
}

const resetCount = () => {
    stopCount()
    i = 0
    timeDiv.innerHTML = 0
}

startBTN.onclick = startCount
stopBTN.onclick = stopCount
resetBTN.onclick = resetCount












