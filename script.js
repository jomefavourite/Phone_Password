let password = 2456
let input = document.querySelector('input')
let change = document.querySelector('#change')
let buttons = document.querySelectorAll('button')
let del = document.querySelector('#del')
let ok = document.querySelector('#ok')

// alert("Password is 2456")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // let val = input.value.length >= 4
        let inu = input.value !== password

        if (input.value == password && input.value.length >= 4) {
            alert('Welcome, Correct Password 🎉🎉')
            input.value = ''
            change.style.display = 'none'
        }

        if (input.value.length >= 4 && inu) {
            change.style.display = 'block'
            change.textContent = `Incorrect Pin Entered`
            input.value = ''
        } else {
            input.value += button.textContent
        }

        // console.log(button.textContent)
        // console.log(input.value.length)
    })
})

del.addEventListener('click', () => {
    input.value = ''
})

ok.addEventListener('click', () => {
    input.value = ''
})