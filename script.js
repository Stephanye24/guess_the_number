'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;

//again button
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log(number);
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Advinhando...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //no number
  if (!guess) {
    document.querySelector('.message').textContent =
      'Tá com Alzheimer ne? Esqueceu o número..';

    //player win
  } else if (guess === number) {
    document.querySelector('.message').textContent =
      'Oloco meu, olha essa fera ai bicho!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //guess greater than number
  } else if (guess === number + 1 || guess === number + 2) {
    document.querySelector('.message').textContent =
      'Na traveee! Tenta um pouco menor';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Perdeu feio... Perdeu rude..';
    }
  } else if (guess > number) {
    document.querySelector('.message').textContent = 'Chutou alto em?';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Perdeu feio...Perdeu rude..';
    }
    //guess lower than number
  } else if (guess === number - 1 || guess === number - 2) {
    document.querySelector('.message').textContent =
      'na traveee! Tenta um pouco maior';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Perdeu feio...Perdeu rude..';
    }
  } else if (guess < number) {
    document.querySelector('.message').textContent = 'Chutou baixo em?';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Perdeu feio.. Perdeu rude..';
    }
  }
});
