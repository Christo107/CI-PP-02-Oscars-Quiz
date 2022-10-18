const startButton = document.getElementById("start-quiz")
const questionArea = document.getElementById("question-area")
const initialState = document.getElementById("initial-state")
const question = document.getElementById("question")
const answer = document.getElementById("answer-buttons")

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)
 
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

function showQuestion(question) {

}

function selectAnswer() {

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