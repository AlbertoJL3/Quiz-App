var quizData = [
    {
        question: "Who won the 2007 world championship?",
        a: "Kimi Raikonnen",
        b: "Fernando Alonso",
        c: "Lewis Hamilton",
        d: "Nigel Mansell",
        correct: "a"
    },
    {
        question: "Who won the 2008 world championship?",
        a: "Lewis Hamilton",
        b: "Fernando Alonso",
        c: "Ayrton Senna",
        d: "Sebastian Vettel",
        correct: "a"
    },
    {
        question: "who won the 2009 world championship?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a"
    },
    {
        question: "who won the 2010 world championship?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a"
    },
    {
        question: "who won the 2011 world championship?",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const scoreEl = document.querySelectorAll('score_value')
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswer()
    
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    scoreEl.innerHTML = score;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
function incrementScore() {
    score ++;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            incrementScore() 
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
            
        } else {
            quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} question correctly </h2> <button onclick="location.reload()">Reload</button> `
            window.localStorage.setItem('SCORE', JSON.stringify(score));
        }
    }
    console.log(answer)
    console.log(score)
})

//Need to save score locally
//need to make new page for highscore
//need to make new page for start button