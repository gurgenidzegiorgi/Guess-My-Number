const body = document.querySelector('body')
const checkNumber = document.querySelector('#checkNumber')
const checkBtn = document.querySelector('#checkBtn')
const againBtn = document.querySelector('#againBtn')
const h2 = document.querySelectorAll('h2')
const query = document.querySelector('.quest-mark-div')
const score = document.querySelector('#score')
const high = document.querySelector('#highscore')


let secretNumber = Math.trunc(Math.random() * 20) + 1
let trackScore = 20;
let highScore = 0;

const displayMessage = function (message) {
  h2.forEach(x => {
    x.textContent = message;
  })
}


checkBtn.addEventListener('click', () => {
  let guess = Number(checkNumber.value)

  if (!guess) {
    displayMessage('⛔️ No Number!')
  }
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!')
    body.style.backgroundColor = '#60b347'
    query.textContent = secretNumber;
    if (trackScore > highScore) {
      highScore = trackScore;
      high.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (trackScore > 1) {
      guess > secretNumber ? displayMessage('📈 Too High!') : displayMessage('📉 Too Low!')
      trackScore--;
      score.textContent = trackScore;
    }
  } else {
    displayMessage('💥 You Lost The Game!')
    body.style.backgroundColor = '#ed2939 ';
  }
})

againBtn.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1
  displayMessage('Start Guessing...')
  body.style.backgroundColor = '#222';
  trackScore = 20;
  score.textContent = trackScore;
  highScore = trackScore
  query.textContent = '?';
  checkNumber.value = '';

})
