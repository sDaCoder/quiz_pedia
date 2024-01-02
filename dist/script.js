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

function deselection(options, deselect) {
    deselect.addEventListener('click', function () {
        options.forEach(option => {
            option.previousElementSibling.checked = false
            colourOpt(option)
        });
    })
}

deselection(options, document.getElementById("deselect"))

// ? LOGIC PART
const QuesAns = {
    "When was the first known use of the word 'quiz'": ["1781", "1771", "1871", "1881"],
    "Which built-in function can get information from the user": ["input", "get", "print", "write"],
    "Which keyword do you use to loop over a given list of elements": ["for", "while", "each", "loop"],
    "Which is the oldest programming language of the world": ["Java", "Python", "C", "C++"],
    "Which is an entry controlled loop": ["while", "do-while", "for", "forEach"],
    "Which is not a OOP language": ["C", "Python", "C++", "JavaScript"],
    "What is the name of the highest mountain peak of the world": ["Mount Everest", "Godwin Austin(K2)", "Kanchenjunga", "Mount Killimanjaro",],
};

function quesPrint(qNo)
{
    document.getElementById("qarea").textContent = `${qArr[qNo]}?`    
}

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

function labelPrint(qNo, qLabels) {
    qLabels.forEach(qLabel => {
        qLabel.textContent = `${qNo+1}/${qArr.length}`
    });
}

function checkedRadio(radios) {
    for(let i = 0; i < radios.length; i++)
    {
        if (radios[i].checked) {
            return radios[i]
        }
    }
}

const qArr = (Object.keys(QuesAns))
const optArr = (Object.values(QuesAns))
const qLabels = document.querySelectorAll(".qLabel")

let qNo = 0
let bars = document.querySelectorAll(".bar")
quesPrint(qNo)
optPrint(qNo, options)
controlWid(qNo, bars)
labelPrint(qNo, qLabels)
deselection(options, document.getElementById("continue"))

document.getElementById("continue").addEventListener('click', () => {

    qNo++
    quesPrint(qNo)
    optPrint(qNo, options)
    controlWid(qNo, bars)
    labelPrint(qNo, qLabels)
    deselection(options, document.getElementById("continue"))
    
})

