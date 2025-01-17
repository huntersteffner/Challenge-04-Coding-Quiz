"use strict";

// DOM Elements
const gameContainer = document.querySelector('.game-container')
const startMenu = document.querySelector('.start-menu')
const quizContainer = document.querySelector('.quiz-container')
const questionNumber = document.getElementById('question-number')
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
const scoreFinal = document.getElementById('score-final')
const timer = document.getElementById('timer')
const secondsEl = document.getElementById('seconds')
const highScoreInput = document.getElementById('high-score')
const submitHighScore = document.getElementById('submit-score')
const highScoreContainer = document.querySelector('.high-score-container')
const highScoreList = document.getElementById('highscore-list')
const modalBtn = document.getElementById('modal-btn')
const modalClose = document.getElementById('modal-close')
const modalContainer = document.querySelector('.modal-container')
const playAgainBtn = document.querySelector('.play-again')

// Global Variables
let numOfQuestions
let currentAnswer = ''
let points = 0
let countdownSeconds = 10
let refreshIntervalID
let highScoreName = ''



// Quiz Questions
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
 {
    question: 'What is WordPress?',
        a: 'A: It is a software used to press text',
        b: 'B: It is a text formatting software',
        c: 'C: It is a CMS (Content Management System)',
        d: 'D: It is mail service',
        ans: 'C'
},
 {
    question: 'What does SQL stand for',
        a: 'A: Structured Query Language',
        b: 'B: Statistical Query Language',
        c: 'C: Superior Questions Lot',
        d: 'D: Standard Query Lot',
        ans: 'A'
},
 {
    question: 'Which of the following is true about Javascript?',
        a: 'A: It is a sever side scripting language',
        b: 'B: It is a client side scripting language',
        c: 'C: It is a Software',
        d: 'D: It is a database',
        ans: 'B'
},
 {
    question: 'Which of the following is true about PHP?',
        a: 'A: It is a server side scripting language',
        b: 'B: It is a client side scripting language',
        c: 'C: It is a Software',
        d: 'D: It is a database',
        ans: 'A'
},
 {
    question: 'Which of the following is true?',
        a: 'A: You need a server to host your website files',
        b: 'B: You don’t need a server to host your website files',
        c: 'C: You can create a website without using HTML',
        d: 'D: You can’t create a website without a CMS',
        ans: 'A'
},
 {
    question: 'Which of the following softwares could be used to build a website?',
        a: 'A: Power Point',
        b: 'B: Excel',
        c: 'C: Dream Weaver',
        d: 'D: ERP',
        ans: 'C'
},
 {
    question: 'Which of the following statements is false about hosting?',
        a: 'A: Shared hosting is cheaper than dedicated hosting',
        b: 'B: Shared hosting is safer than dedicated hosting',
        c: 'C: Dedicated hosting is safer than shared hosting',
        d: 'D: Though more expensive than shared hosting, Dedicated hosting is more secure',
        ans: 'B'
},
 {
    question: 'Which of the following is not a web hosting company?',
        a: 'A: Hostgator',
        b: 'B: Blue Host',
        c: 'C: WPX Hosting',
        d: 'D: Facebook',
        ans: 'D'
},
 {
    question: 'Which of the following statements is true?',
        a: 'A: The web designer shouldn’t just be concerned about the looks but also about user interface',
        b: 'B: Usability is very important in web design',
        c: 'C: A and B',
        d: 'D: None of the above',
        ans: 'C'
},

]

// This is to begin the timer counting down from its starting time
const startTimer = function() {
    if (secondsEl.innerHTML <= 0) {
        gameOver()
        timer.innerHTML = 'Time\'s up!'
    }
    secondsEl.innerHTML--
}



// Function to randomly select a question from the list
const pickQuestion = function() {
    if (questions.length !== 0) {
        let questionPick = Math.floor(Math.random() * questions.length)
        let currentQuestion = questions[questionPick]
        console.log(currentQuestion.question)
    
    // Matching randomly picked question with an answer choice
        question.innerHTML = currentQuestion.question
        ans1.innerHTML = currentQuestion.a
        ans2.innerHTML = currentQuestion.b
        ans3.innerHTML = currentQuestion.c
        ans4.innerHTML = currentQuestion.d
    
        currentAnswer = currentQuestion.ans
    
        questions.splice(questionPick, 1)
        questionNumber.innerHTML++
        numOfQuestions = questions.length
    } else {
        gameOver()
    }
    
    

}

// Function that runs to start quiz. It should hide start screen, display quiz container, begin countdown timer, and randomly select a question.
const startQuiz = function() {
    startMenu.classList.toggle('hidden')
    quizContainer.classList.toggle('hidden')
    refreshIntervalID = setInterval(startTimer, 1000)
    pickQuestion()
}

// Button that begins quiz
startBtn.addEventListener('click', function(){
    startQuiz()
    
})

// Validate whether the correct answer was selected
ans1.addEventListener('click', function() {
    if (currentAnswer === 'A') {
        points ++
        score.innerHTML = points
    } else {
        secondsEl.innerHTML -= 10
    }
})
ans2.addEventListener('click', function() {
    if (currentAnswer === 'B') {
        points ++
        score.innerHTML = points
    } else {
        secondsEl.innerHTML -= 10
    }
})
ans3.addEventListener('click', function() {
    if (currentAnswer === 'C') {
        points ++
        score.innerHTML = points
    } else {
        secondsEl.innerHTML -= 10
    }
})
ans4.addEventListener('click', function() {
    if (currentAnswer === 'D') {
        points ++
        score.innerHTML = points
    } else {
        secondsEl.innerHTML -= 10
    }
})

// Listens to when you select an answer
for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', function() {
        pickQuestion();
    })
}

// Function to run when game is over
function gameOver () {
    highScoreContainer.classList.toggle('hidden')
    clearInterval(refreshIntervalID)
    scoreFinal.innerHTML = points
    quizContainer.classList.toggle('hidden')
}
// When the questions run out, the game over function should run
if (numOfQuestions === 0) {
    gameOver()
}

// High Score Modal Logic
// Saving highscore that is entered in local storage
submitHighScore.addEventListener('click', function() {
    highScoreName = highScoreInput.value
    const newHighScoreLine = `<li>${highScoreName} : ${points}</li>`
    console.log(newHighScoreLine)
    highScoreContainer.classList.toggle('hidden')
    highScoreList.innerHTML += newHighScoreLine

    console.log(highScoreName, points)
    localStorage.setItem(highScoreName, points)
    playAgainBtn.classList.toggle('hidden')
})

// Load high scores from Local storage
for(let i = 0; i < localStorage.length; i++) {
    const nameKey = localStorage.key(i)
    const namePoints = localStorage.getItem(nameKey)

    highScoreList.innerHTML += `<li>${nameKey} : ${namePoints}</li>`
}

// The logic that makes the modal appear
const modalAppear = function() {
    modalContainer.classList.toggle('hidden')
    gameContainer.classList.toggle('blur')
}

// Clicking on Modal Open Button
modalBtn.addEventListener('click', function() {
    modalAppear()
    
})

// Clicking on Modal Close Button
modalClose.addEventListener('click', function() {
    modalAppear()
})

// Reset the game to refresh the page and play again.
playAgainBtn.addEventListener('click', function() {
    location.reload()
})