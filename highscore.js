// var username = document.querySelector('#username')
// var saveScoreBtn = document.querySelector('#saveScoreBtn')
// var finalScore = document.querySelector('#finalScore')
// var mostRecestScore = document.querySelector('#mostRecentScore')

// const highscores = JSON.parse(localSotrage.getItem('highScores')) || []

// finalScore.innerText = mostRecentScore

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e => {
//     e.preventDefault()
//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }
//     highscores.push{score}
//     highScores.sort{(a,b) => {
//         return b.score -a.score
//     }}
//     highScores.splice(5)
//     localStorage.setItem('highscore', JSON.stringify(highScores))
//     window.location.assign('/')
// }