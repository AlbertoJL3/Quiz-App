var quizData1 = [
    {
        question: "Who won the 2007 world championship?",
        a: "Lewis Hamilton",
        b: "Fernando Alonso",
        c: "Kimi Raikonnen",
        d: "Nigel Mansell",
        correct: "c"
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
        question: "Which rookie team won their first world championship on their first season ever? ",
        a: "Mercedes Benz",
        b: "Sauber",
        c: "Alpha Romeo",
        d: "Brawn GP",
        correct: "d"
    },
    {
        question: "Which team became has won 8 constructor's championships in a row?",
        a: "Red Bull",
        b: "Mercedes",
        c: "Scuderia Ferrari",
        d: "Alpha Tauri",
        correct: "b"
    },
    {
        question: "Who is Max Verstappen's teammate in the 2022 Formula 1 Season? ",
        a: "Lewis Hamilton",
        b: "George Russell",
        c: "Sergio Perez",
        d: "Fernando Alonso",
        correct: "c"
    }
];
var timerEl = document.getElementById("timer");


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array
}

var quizData = shuffle(quizData1);
var quiz = document.getElementById('quiz')
var answerEls = document.querySelectorAll('.answer')
var questionEl = document.getElementById('question')
var a_text = document.getElementById('a_text')
var b_text = document.getElementById('b_text')
var c_text = document.getElementById('c_text')
var d_text = document.getElementById('d_text')
var submitBtn = document.getElementById('submit')
var scoreEl = document.getElementById('score_value')
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
    answeredQuestions = 0;
    
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
    scoreEl.innerText = score
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
    
})
setInterval(setTimer(),1000)

function setTimer() {
var timer = 30;
 if (timer>0){
 timer = timer - 1;
 timerEl.innerText = timer;
 } 
 }
//Need to save score locally
//need to make new page for highscore
//need to make new page for start button