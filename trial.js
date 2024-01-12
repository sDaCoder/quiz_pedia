// const QuesAns = {
//     "When was the first known use of the word 'quiz'": ["1781", "1771", "1871", "1881"],
//     "Which built-in function can get information from the user": ["input", "get", "print", "write"],
//     "Which keyword do you use to loop over a given list of elements": ["for", "while", "each", "loop"],
//     "Which is the oldest programming language of the world": ["Java", "Python", "C", "C++"],
//     "Which is an entry controlled loop": ["while", "do-while", "for", "forEach"],
//     "Which is not a OOP language": ["C", "Python", "C++", "JavaScript"],
//     "What is the name of the highest mountain peak of the world": ["Mount Everest", "Godwin Austin(K2)", "Kanchenjunga", "Mount Killimanjaro",],
// }

// let Obj6 = {
//     "question": (Object.keys(QuesAns))[6],
//     "optArray": (Object.values(QuesAns))[6],
//     "correctAns": (Object.values(QuesAns))[6][0]
// }
// console.log(Obj6)
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
        correctAns: 'Java'
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

const qArr = []
const optArr = []
const CorrectAnswers = []
QuesAns.forEach((obj, i) => {
    qArr[i] = obj.question
    optArr[i] = obj.optArray
    CorrectAnswers[i] = obj.correctAns
});
// CorrectAnswers.push(null)


function quesPrint(qNo) {
    console.log(`${qArr[qNo]}?`)
}

function optPrint(qNo, options) {
    options.forEach((option, i) => {
        option.textContent = `  ${optArr[qNo][i]}`
    });
}

let unanswered = 0
let incorrect = 0
let checkedAnsArr = ['1781', null, 'for', null, 'forEach', null, 'Mount Everest']
console.log(CorrectAnswers)
console.log(checkedAnsArr)
for (let i = 0; i < checkedAnsArr.length; i++) {
    if (checkedAnsArr[i] != CorrectAnswers[i]) {
        if (checkedAnsArr[i] == null) {
            unanswered++
        }
        else{
            incorrect++
        }
    }
}
// console.log(`The number of incorrect answers is: ${incorrect}`)
// console.log(`The number of unanswered answers is: ${unanswered}`)

checkedAnsArr.forEach((answer, i) => {
    console.log(qArr[i])
    if (checkedAnsArr[i] == null) {
        console.log(`You didn't answer`)
    }
    else{
        console.log(`You answered: ${answer}`)
    }
    console.log(`Correct Answer: ${CorrectAnswers[i]}`)
    console.log("\n")
});