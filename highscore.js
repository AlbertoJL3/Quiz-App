
var saveScoreBtn = document.querySelector('#saveScoreBtn')
var leaderboard = document.querySelector('#leaderboard')
var highscores = [];

function saveScore() {
    let score = document.querySelector('#score')
    let highscore = score.value;
    let username = document.querySelector('#username')
    let name = username.value;
    const li = document.createElement('li');
    li.innerHTML = `${name}: ${highscore}`;
    leaderboard.appendChild(li);

}

// Define the function
function addScore(score, name) {
    // Create the object
    var scoreObject = {
        score: score,
        name: name
    };

    // Add the object to the array
    scores.push(scoreObject);
}
saveScoreBtn.addEventListener('click', (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();
    saveScore();
});