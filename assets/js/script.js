const startButton = document.getElementById("start-quiz")
const questionArea = document.getElementById("question-area")
const initialState = document.getElementById("initial-state")

startButton.addEventListener("click", startQuiz)
 
function startQuiz() {
    initialState.classList.add("hide")
    questionArea.classList.remove("hide")
    loadNextQuestion()
}

function loadNextQuestion() {

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
        
    }
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
        
    }
]