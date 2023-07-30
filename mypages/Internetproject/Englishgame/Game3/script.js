const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var arr = [
  ["火龍果","pitaya"],
  ["榴槤","durian"],
  ["鳳梨","pineapple"],
  ["香蕉","banana"],
  ["檸檬","lemon"],
  ["奇異果","kiwi_fruit"],
  ["酪梨","avocado"],
  ["蘋果","apple"],
  ["西瓜","watermelon"],
  ["芒果","mango"],
  ["貓","cat"],
  ["狗","dog"],
  ["鳥","bird"],
  ["河馬","hippo"],
  ["馬","horse"],
  ["老鼠","mouse"],
  ["魚","fish"],
  ["大象","elephant"],
  ["長頸鹿","giraffe"],
  ["袋鼠","kangaroo"],
  ["番茄","tomato"],
  ["蘿蔔","radish"],
  ["香菇","mushroom"],
  ["菠菜","spinach"],
  ["芹菜","celery"],
  ["竹筍","bamboo_shoots"],
  ["洋蔥","onion"],
  ["蒜頭","garlic"],
  ["薑","ginger"],
  ["高麗菜","cabbage"],
  ["犰狳","armadillo"],
  ["龍鬚菜","gracilaria"],
]; 

function shuffleArray(inputArray){
  inputArray.sort(()=> Math.random() - 0.5);
}

shuffleArray(arr);
console.log(arr);

var Value00 = document.getElementById("value00");
Value00.textContent = arr[0][0];
var Value01 = document.getElementById("value01");
Value01.textContent = arr[0][1];
var Value10 = document.getElementById("value10");
Value10.textContent = arr[1][0];
var Value11 = document.getElementById("value11");
Value11.textContent = arr[1][1];
var Value20 = document.getElementById("value20");
Value20.textContent = arr[2][0];
var Value21 = document.getElementById("value21");
Value21.textContent = arr[2][1];
var Value30 = document.getElementById("value30");
Value30.textContent = arr[3][0];
var Value31 = document.getElementById("value31");
Value31.textContent = arr[3][1];
var Value40 = document.getElementById("value40");
Value40.textContent = arr[4][0];
var Value41 = document.getElementById("value41");
Value41.textContent = arr[4][1];
var Value50 = document.getElementById("value50");
Value50.textContent = arr[5][0];
var Value51 = document.getElementById("value51");
Value51.textContent = arr[5][1];


function flipCard() {

  if (lockBoard) return;

  if (this === firstCard) return;
  
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this; 
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 800);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
function logout(){
  window.location.href = "../index.html";
}

cards.forEach(card => card.addEventListener('click', flipCard));
