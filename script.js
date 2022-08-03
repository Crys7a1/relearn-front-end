'use strict';

// 猪骰子游戏
// 游戏规则: 游戏中有2位玩家,每局比赛 在每个回合中,玩家掷骰子的次数与他希望的次数相同。
// 每个结果都会加到他的ROUND分数中 但是,如果玩家掷出1,则他的全部回合得分都将丢失。
// 在那之后,轮到下一个玩家了 玩家可以选择“保留”,这意味着他的回合得分将被添加到他的GLBAL得分中。
// 之后-轮到下一个玩家了 首位在GLOBAL得分上达到100分的玩家赢得比赛

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const oneScore = document.querySelector('#score--0');
const secScore = document.querySelector('#score--1');
const oneCurrentScore = document.querySelector('#current--0');
const secCurrentScore = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
let sum1 = 0;
let sum2 = 0;
let randomSum = 0;
let randomSum2 = 0;
//手动换边 见好就收 存储分数
btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    sum1 = sum1 + randomSum;
    oneCurrentScore.textContent = 0;
    randomSum = 0;
    oneScore.textContent = sum1;

    if (sum1 >= 50) {
      player0.classList.add('player--winner');
    }
  } else if (player1.classList.contains('player--active')) {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    sum2 = sum2 + randomSum2;
    secCurrentScore.textContent = 0;
    randomSum2 = 0;
    secScore.textContent = sum2;

    if (sum2 >= 50) {
      player1.classList.add('player--winner');
    }
  }
});

//roll 骰子
btnRoll.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    let randomCount1 = Math.trunc(Math.random() * 6 + 1);

    if (randomCount1 == 1) {
      dice.src = `dice-${randomCount1}.png`;
      // sum1 = 0;
      randomSum = 0;
      oneCurrentScore.textContent = 0;
      // oneScore.textContent = sum1;
      player0.classList.remove('player--active');
      player1.classList.add('player--active');
    } else {
      dice.src = `dice-${randomCount1}.png`;
      randomSum = randomSum + randomCount1;
      oneCurrentScore.textContent = randomSum;
      if (sum1 >= 100) {
        player0.classList.add('player--winner');
        oneScore.textContent = sum1;
      }
    }
  } else if (player1.classList.contains('player--active')) {
    let randomCount2 = Math.trunc(Math.random() * 6 + 1);
    if (randomCount2 == 1) {
      dice.src = `dice-${randomCount2}.png`;
      randomSum2 = 0;
      secCurrentScore.textContent = 0;
      player0.classList.add('player--active');
      player1.classList.remove('player--active');
    } else {
      dice.src = `dice-${randomCount2}.png`;
      randomSum2 = randomSum2 + randomCount2;
      secCurrentScore.textContent = randomSum2;
      console.log(sum2);
    }
  }
});
//清空数据-新的对局
btnNewGame.addEventListener('click', function () {
  oneScore.textContent = 0;
  secScore.textContent = 0;
  oneCurrentScore.textContent = 0;
  secCurrentScore.textContent = 0;
  sum1 = 0;
  sum2 = 0;
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
});
