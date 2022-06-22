"use strict";

// DOM Variables
const startMenu = document.querySelector('.start-menu')
const quizContainer = document.querySelector('.quiz-container')
const startBtn = document.getElementById('start-btn')
const submitBtn = document.getElementById('submit')
const question = document.querySelector('#question')
const labelA = document.getElementById('a')
const labelB = document.getElementById('b')
const labelC = document.getElementById('c')
const labelD = document.getElementById('d')
const ans1 = document.querySelector('#ans-1')
const ans2 = document.querySelector('#ans-2')
const ans3 = document.querySelector('#ans-3')
const ans4 = document.querySelector('#ans-4')
const choice = document.querySelectorAll('.choice')
const score = document.getElementById('score')

const numOfQuestions = 5
let currentAnswer = ''
let points = 0

// To save time, I copied and pasted several questions from https://electronicspost.com/multiple-choice-questions-and-answers-on-web-design/
const questions = [{
    question: 'What is HTML used for?',
        a: 'A: To send an email',
        b: 'B: To structure the elements to be viewed in page',
        c: 'C: Antivirus',
        d: 'D: Spellcheck',
        ans: 'B'
}, {
    question: 'To make your website mobile friendly, you can make your website?',
        a: 'A: Responsive',
        b: 'B: Reactive',
        c: 'C: Fast Loading',
        d: 'D: Light',
        ans: 'A'
}, {
    question: 'What does CSS stand for?',
        a: 'A: Current Style Sheets',
        b: 'B: Current Sheets Style',
        c: 'C: Cascading Style Sheets',
        d: 'D: Cascading Sheets Style',
        ans: 'C',
},
 {
    question: 'Which of the following statements is false?',
        a: 'A: You can make a website without using HTML',
        b: 'B: You can make a website without using PHP',
        c: 'C: You can make a website without using CSS',
        d: 'D: You can make a website without using Javascript',
        ans: 'A'
},

]

const pickQuestion = function() {
    let questionPick = Math.floor(Math.random() * questions.length)
    let currentQuestion = questions[questionPick]
    console.log(currentQuestion.question)

    question.innerHTML = currentQuestion.question
    ans1.innerHTML = currentQuestion.a
    ans2.innerHTML = currentQuestion.b
    ans3.innerHTML = currentQuestion.c
    ans4.innerHTML = currentQuestion.d

    currentAnswer = currentQuestion.ans

    questions.splice(questionPick, 1)

    console.log(currentAnswer)
    

}

const startQuiz = function() {
    startMenu.classList.toggle('hidden')
    quizContainer.classList.toggle('hidden')
    pickQuestion()
}


startBtn.addEventListener('click', function(){
    console.log('test')
    startQuiz()
})

// const clearRadio = function() {
//     labelA.checked = false
//     labelB.checked = false
//     labelC.checked = false
//     labelD.checked = false

// }
const evaluateAnswer = function() {
    
    // pickQuestion()
    if (currentAnswer === 'A' && ans1.clicked == true) {
        console.log('Correct')
    } else if (currentAnswer === 'B' && ans2.clicked == true) {
        console.log('Correct')
    } else if (currentAnswer === 'C' && ans3.clicked == true) {
        console.log('Correct')
    } else if (currentAnswer === 'D' && ans4.clicked == true) {
        console.log('Correct')
    }
    
    // clearRadio()
}

ans1.addEventListener('click', function() {
    if (currentAnswer === 'A') {
        points ++
        score.innerHTML = points
    }
})
ans2.addEventListener('click', function() {
    if (currentAnswer === 'B') {
        points ++
        console.log(points)
        score.innerHTML = points
    }
})
ans3.addEventListener('click', function() {
    if (currentAnswer === 'C') {
        points ++
        console.log(points)
        score.innerHTML = points
    }
})
ans4.addEventListener('click', function() {
    if (currentAnswer === 'D') {
        points ++
        console.log(points)
        score.innerHTML = points
    }
})

for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', function() {
        evaluateAnswer()
        pickQuestion()

    })
}

// choice.addEventListener('click',function(e) {
//     console.log('Test')
// })
