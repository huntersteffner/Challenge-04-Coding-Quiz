"use strict";

// DOM Variables
const startMenu = document.querySelector('.start-menu')
const quizContainer = document.querySelector('.quiz-container')
const startBtn = document.getElementById('start-btn')
const question = document.querySelector('#question')
const ans1 = document.querySelector('#ans-1')
const ans2 = document.querySelector('#ans-2')
const ans3 = document.querySelector('#ans-3')
const ans4 = document.querySelector('#ans-4')

const numOfQuestions = 5

const questions = [['My name is bob'],['A: Not really'],['B: Wrong'],['C: Right'], ['D: Is for dog'],['I like water'],['A: Fish'],['B: Right'],['C: Wrong'],['D: Cow']]

const questions2 = [['My name is bob', 'A: Not really', 'B: Wrong', 'C: Right', 'D: is for dog'], ['I like water','A: Fish', 'B: Right', 'C: Wrong', 'D: Cow'],['Question','A: R','B: W','C: W', 'D: W']]

console.log(questions2[0][2])
console.log(questions2.length)

const pickQuestion = function() {
    let questionPick = Math.floor(Math.random() * questions2.length)
    let currentQuestion = questions2[questionPick]
    console.log(currentQuestion[2])
    // console.log(`${questions2[currentQuestion}`)
    question.innerHTML = `${currentQuestion[0]}`
    ans1.innerHTML = `${currentQuestion[1]}`
    ans2.innerHTML = `${currentQuestion[2]}`
    ans3.innerHTML = `${currentQuestion[3]}`
    ans4.innerHTML = `${currentQuestion[4]}`

}

const startQuiz = function() {
    // startMenu.classList.toggle('hidden')
    // quizContainer.classList.toggle('hidden')
    pickQuestion()
}


startBtn.addEventListener('click', function(){
    console.log('test')
    startQuiz()
})



