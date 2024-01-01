// ! DESIGNING PART
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

// ? LOGIC PART
const QuesAns = {
    "When was the first known use of the word 'quiz'": ["1781", "1771", "1871", "1881"],
    "Which built-in function can get information from the user": ["input", "get", "print", "write"],
    "Which keyword do you use to loop over a given list of elements": ["for", "while", "each", "loop"],
    "Which is the oldest programming language of the world": ["Python", "C", "C++", "Java"],
    "Which is not a OOP language": ["Python", "C", "C++", "JavaScript"],
    "What is the name of the highest mountain peak of the world": ["Mount Everest", "Godwin Austin(K2)", "Kanchenjunga", "Mount Killimanjaro",],
};

function optPrint(qNo, options)
{
    options.forEach((option, i) => {
        let optNum = String.fromCharCode(65 + i)
        option.textContent = `(${optNum})  ${optArr[qNo][i]}`
    })
}

function controlWid(qNo, bars)
{
    let width = (qNo+1)/(qArr.length)*100
    bars.forEach(bar =>{bar.style.width = `${width}%`})
}

const qArr = (Object.keys(QuesAns))
const optArr = (Object.values(QuesAns))

let qNo = 0
let bars = document.querySelectorAll(".bar")
document.getElementById("qarea").textContent = `${qArr[0]}?`
optPrint(0, options)
controlWid(0, bars)

document.getElementById("continue").addEventListener('click', function () {

    qNo++
    document.getElementById("qarea").textContent = `${qArr[qNo]}?`
    optPrint(qNo, options)
    controlWid(qNo, bars)


})

