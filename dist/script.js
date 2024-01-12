// ! DESIGNING PART
let options = document.querySelectorAll(".options")
let radios = document.querySelectorAll('input[type="radio"]')

function colourOpt(option) {
    if (option.previousElementSibling.checked == true) {
        option.parentElement.style.backgroundColor = 'rgb(34 197 94)'
        option.style.color = 'white'
        option.previousElementSibling.previousElementSibling.style.backgroundColor = 'rgb(254, 242, 242)'
    }
    else {
        option.parentElement.style.backgroundColor = ''; // Reset the background color if the radio button is not checked
        option.style.color = ''
        option.previousElementSibling.previousElementSibling.style.backgroundColor = ''
    }

}

radios.forEach(radio => {
    radio.addEventListener('click', function () {
        options.forEach(option => colourOpt(option))
    })
})

function deselection(options) {
    options.forEach(option => {
        option.previousElementSibling.checked = false
        colourOpt(option)
    });
}

// deselection(options, document.getElementById("deselect"))
document.getElementById("deselect").addEventListener('click', function () {
    deselection(options)
})

// ? LOGIC PART
// const QuesAns = {
//     "When was the first known use of the word 'quiz'": ["1781", "1771", "1871", "1881"],
//     "Which built-in function can get information from the user": ["input", "get", "print", "write"],
//     "Which keyword do you use to loop over a given list of elements": ["for", "while", "each", "loop"],
//     "Which is the oldest programming language of the world": ["Java", "Python", "C", "C++"],
//     "Which is an entry controlled loop": ["while", "do-while", "for", "forEach"],
//     "Which is not a OOP language": ["C", "Python", "C++", "JavaScript"],
//     "What is the name of the highest mountain peak of the world": ["Mount Everest", "Godwin Austin(K2)", "Kanchenjunga", "Mount Killimanjaro",],
// };

const QuesAns = [
    {
        question: "When was the first known use of the word 'quiz'",
        optArray: ['1771', '1871', '1781', '1881'],
        correctAns: '1781'
    },
    {
        question: 'Which built-in function can get information from the user',
        optArray: ['get', 'print', 'write', 'input'],
        correctAns: 'input'
    },
    {
        question: 'Which keyword do you use to loop over a given list of elements',
        optArray: ['while', 'each', 'loop', 'for'],
        correctAns: 'for'
    },
    {
        question: 'Which is the oldest programming language of the world',
        optArray: ['Python', 'Java', 'C', 'C++'],
        correctAns: 'C'
    },
    {
        question: 'Which is an entry controlled loop',
        optArray: ['do-while', 'while', 'for in', 'forEach'],
        correctAns: 'while'
    },
    {
        question: 'Which is not a OOP language',
        optArray: ['C', 'Python', 'C++', 'JavaScript'],
        correctAns: 'C'
    },
    {
        question: 'What is the name of the highest mountain peak of the world',
        optArray: ['Godwin Austin(K2)', 'Kanchenjunga', 'Mount Everest', 'Mount Killimanjaro'],
        correctAns: 'Mount Everest'
    }
]

function quesPrint(qNo) {
    document.getElementById("qarea").textContent = `${qArr[qNo]}?`
}

function optPrint(qNo, options) {
    options.forEach((option, i) => {
        option.textContent = `${(optArr[qNo])[i]}`
    })
}

function controlWid(qNo, bars) {
    let width = (qNo + 1) / (qArr.length) * 100
    bars.forEach(bar => { bar.style.width = `${width}%` })
}

function labelPrint(qNo, qLabels) {
    qLabels.forEach(qLabel => {
        qLabel.textContent = `${qNo + 1}/${qArr.length}`
    });
}

function checkedRadio(radios) {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i]
        }
    }
}

function UIload(qNo) {
    quesPrint(qNo)
    optPrint(qNo, options)
    controlWid(qNo, bars)
    labelPrint(qNo, qLabels)
    deselection(options)
}

function resultDesign() {
    document.getElementById("quiz").style.display = 'none'
    document.getElementById("result").style.display = 'block'
    document.getElementById("deselect").style.display = 'none'
    document.getElementById("continue").textContent = 'okay'
    document.getElementById("continue").addEventListener('click', () => { location.reload() })

    document.getElementById("scoreStr").textContent = `You scored ${score * 100} out of ${qArr.length * 100}`
    document.querySelectorAll("details").forEach((detail, i) =>{
        detail.querySelector("summary").textContent = `${qArr[i]}?`
        if (checkedAnsArr[i] != CorrectAnswers[i]) {
            if (checkedAnsArr[i] == null) {
                detail.getElementsByTagName("li")[0].textContent = `You didn't Answer`
                detail.getElementsByTagName("li")[0].style.color = `rgb(234, 179, 8)`
                detail.getElementsByTagName("li")[1].textContent = `Correct Answer: ${CorrectAnswers[i]}`
                detail.getElementsByTagName("li")[2].textContent = `Score: 0`
            }
            else {
                detail.getElementsByTagName("li")[0].innerHTML = `You answered ${checkedAnsArr[i]} &#10060;`
                detail.getElementsByTagName("li")[0].style.color = `red`
                detail.getElementsByTagName("li")[1].textContent = `Correct Answer: ${CorrectAnswers[i]}`
                detail.getElementsByTagName("li")[2].textContent = `Score: 0`
            }
        }
        else{
            detail.getElementsByTagName("li")[0].innerHTML = `You are Correct &check;`
            detail.getElementsByTagName("li")[0].style.color = `rgb(34, 197, 94)`
            detail.getElementsByTagName("li")[1].textContent = `Correct Answer: ${CorrectAnswers[i]}`
            detail.getElementsByTagName("li")[2].textContent = `Score: 100`
        }
    })
    
}
// const qArr = (Object.keys(QuesAns))
// const optArr = (Object.values(QuesAns))
// let CorrectAnswers = []
// optArr.forEach((opt, i) => {CorrectAnswers[i] = opt[0]});

const qArr = []
const optArr = []
const CorrectAnswers = []
QuesAns.forEach((obj, i) => {
    qArr[i] = obj.question
    optArr[i] = obj.optArray
    CorrectAnswers[i] = obj.correctAns
});

const qLabels = document.querySelectorAll(".qLabel")
let bars = document.querySelectorAll(".bar")

let qNo = 0
let score = 0
let checkedAnsArr = []

UIload(qNo)

document.getElementById("continue").addEventListener('click', () => {

    // console.log(checkedAns)
    if (checkedRadio(radios) != null) {

        const checkedAns = checkedRadio(radios).nextElementSibling.textContent
        checkedAnsArr.push(checkedAns)

        if (checkedAns == `${CorrectAnswers[qNo]}`) {
            score++
        }
        console.log(score)
        qNo++
        if (qNo < qArr.length) {
            UIload(qNo)
        }
        if (qNo == (qArr.length - 1)) {
            document.getElementById("continue").textContent = `finish`
            UIload(qNo)
        }
        if (qNo == qArr.length) {
            let resultStr = `You scored ${score * 100} out of ${qArr.length * 100}`
            alert(resultStr)
            resultDesign()
            // console.log(checkedAnsArr)
            // location.reload()
        }
    }
    else {
        checkedAnsArr.push(null)
        console.log(score)
        qNo++
        if (qNo < qArr.length) {
            UIload(qNo)
        }
        if (qNo == (qArr.length - 1)) {
            document.getElementById("continue").textContent = `finish`
            UIload(qNo)
        }
        if (qNo == qArr.length) {
            let resultStr = `You scored ${score * 100} out of ${qArr.length * 100}`
            alert(resultStr)
            resultDesign()
            // console.log(checkedAnsArr)
            // location.reload()
        }
    }

})
