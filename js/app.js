'use strict';

alert('Welcome to my guessing game!');
let points = 0;

function q1() {

  let answerOne = prompt('Did you go to college?').toLowerCase();
  if(answerOne === 'yes' || answerOne === 'y'){
    // console.log('You are correct!)
    points++;
    alert('You are correct!');
  } else if(answerOne === 'no' || answerOne === 'n'){
    alert('Sorry I did actually, 2 semesters');
  }
}

q1();


//for (let g = 0; g < 7; g++){

function q2() {

  let answerTwo = prompt('Do you practice BJJ?').toLocaleLowerCase();
  if(answerTwo === 'yes' || answerTwo === 'y'){
    //console.log('Winner, winner, chicken dinner!');
    points++;
    alert('Winner, winner, chicken dinner!');
  } else if(answerTwo === 'no' || answerTwo === 'n'){
    alert('Sorry wrong answer!');

  }
}

q2();

function q3(){

  let answerThree = prompt('Did you finish college?').toLocaleLowerCase();
  if(answerThree === 'yes' || answerThree === 'y'){
    // console.log('I did not finish actually, wasn't for me')
    alert('I did not finish actually, it was not for me');
    points ++;
  } else if(answerThree === 'no' || answerThree === 'n'){
    alert('Correct, I did not enjoy my time there lol');
  }
}

q3();

function q4() {

  let answerFour = prompt('Were you in the Army?').toLocaleLowerCase();
  if(answerFour=== 'yes' || answerFour === 'y'){
    // console.log('Yes in teh 101st!);
    alert('Yes in the 101st!');
    points ++;
  } else if(answerFour === 'no' || answerFour === 'n'){
    alert('4 years actually');
  }
}

q4();

function q5() {

  let answerFive = prompt('Were you born on a island?').toLocaleLowerCase();
  if(answerFive === 'yes' || answerFive === 'y'){
    // console.log('In the most beautiful one!');
    alert('In the most beautiful one!');
    points ++;
  } else if(answerFive === 'no' || answerFive === 'n'){
    alert('Carolina, Puerto Rico is the place of my birth');
  }
  // let answserSix = prompt('Choose a number between 1 and 10');
  // if(answerSix <= 5)
}

q5();

function q6() {

  let correctAnswer;
  miniGame:
  for(let i = 0; i < 4; i++){
    correctAnswer =prompt('Choose a number between 1 and 10');
    switch (correctAnswer) {
    case '1':
    case '2':
    case '3':
    case '4':
      alert('Too low');
      break;
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
      alert('Too high');
      break;
    case '5':
      alert('Lucky Guess');
      points ++;
      break miniGame;
    default:
      alert('not a number');
      break;
    }
  }
  alert('correct answer is 5');
}

q6();

function q7(){

  let popularCities = ['miami','tokyo', 'paris', 'nashville'];
  let cityAttempts = 6;
  let cities = null;

  while (cities !== popularCities[0] || cities !== popularCities[1] || cities !== popularCities[2] || cities !== popularCities[3]) {
    if (cityAttempts === 0) {
      alert('you loose');
      break;
    }
    cities = prompt('Guess a  city I have been too').toLowerCase();
    if (cities === popularCities[0] || cities === popularCities[1] || cities === popularCities[2] || cities === popularCities[3]) {
      alert('You win');
      points++;
      break;
    }
    cityAttempts = (cityAttempts -1);
    alert('Game over, no more lives ');
  }
  alert('You got a total of ' + points + ' points');
}

q7();
