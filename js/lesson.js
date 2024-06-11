//PHONE CHECKER

const gmailInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const gmailSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    } else {
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
}

//RECURSION
// let count = 0
// const counter = () => {
//     count++
//     console.log(count)
//     if (count < 500)
//         requestAnimationFrame(counter)
// }
// counter()
