let options = document.querySelectorAll(".options")
let radios = document.querySelectorAll('input[type="radio"]')

function colourOpt(option) {
    if (option.previousElementSibling.checked == true) {
        option.style.background = 'rgb(34 197 94)'
        option.style.color = 'white'
    }
    else {
        option.style.background = ''; // Reset the background color if the radio button is not checked
        option.style.color = ''
    }

}

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        options.forEach(option => colourOpt(option))
    })
})

function deselection(elem) {
    elem.previousElementSibling.checked = false
    colourOpt(elem)
}

let deselect = document.getElementById("deselect")
deselect.addEventListener('click', function () {
    options.forEach(option => deselection(option))
})