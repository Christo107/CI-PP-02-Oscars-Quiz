const startButton = document.getElementById("start-quiz")
const questionArea = document.getElementById("question-area")
const initialState = document.getElementById("initial-state")
const questionElement = document.getElementById("question-text")
const answers = document.getElementsByClassName("answer-btn")
const selectedAnswer = document.getElementsByClassName("selected-answer")
const submitAnswer = document.getElementsByClassName("submit-answer-btn")
const correctAnswerElement = document.getElementById("correct-answers")

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)
// submitAnswer.addEventListener("click", checkAnswer())
 
function startQuiz() {
    initialState.classList.add("hide")
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionArea.classList.remove("hide")
    loadNextQuestion()
}

function loadNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(q) {
    questionElement.textContent = q.question;
    let answerChoices = document.querySelectorAll(".answer-btn")

    answerChoices.forEach(function(element, index) {
        element.textContent = q.answers[index].text;

        element.addEventListener('click', function(){
            element.classList.add("selected-answer")
        })
    })
}

 function checkAnswer() {
    //  if (selectedAnswer === true) {
    //      alert("Good job! You got it right!");
    // } else {
    //      alert(`Sorry, that was incorrect. The correct answer was ${questions.answer}`)
    //  }
}

const questions = [
    {
        question: "Which Italian actor won the Best Actor oscar in 1999?",
        answers: [
            {
                text: "Roberto Benigni",
                correct: true  
            },
            {   
                text: "Robert deNiro",
                correct: false
            },
            {   
                text: "Robert Duvall",
                correct: false
            },
            {   
                text: "Robert Wagner",
                correct: false
            },
        ]
        
    },
    {
        question: "Which actress has won the most academy awards?",
        answers: [
            {
                text: "Katherine Hepburn",
                correct: true  
            },
            {   
                text: "Ingrid Bergman",
                correct: false
            },
            {   
                text: "Meryl Streep",
                correct: false
            },
            {   
                text: "Frances McDormand",
                correct: false
            }
        ]
        
    },
    {
        question: "The first Academy Awards event took place in which year?",
        answers: [
            {
                text: "1929",
                correct: true  
            },
            {   
                text: "1939",
                correct: false
            },
            {   
                text: "1943",
                correct: false
            },
            {   
                text: "1926",
                correct: false
            }
        ]
        
    },
]