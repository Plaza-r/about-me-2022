'use strict';

alert('Welcome to my guessing game!');

let answerOne = prompt('Did you go to college?').toLowerCase();
if(answerOne === 'yes' || answerOne === 'y'){
  // console.log('You are correct!)
  alert('You are correct!');
} else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry I did actually, 2 semesters');
}

let answerTwo = prompt('Do you practice BJJ?').toLocaleLowerCase();
if(answerTwo === 'yes' || answerTwo === 'y'){
  //console.log('Winner, winner, chicken dinner!');
  alert('Winner, winner, chicken dinner!');
} else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Sorry wrong answer!');
}

let answerThree = prompt('Did you finish college?').toLocaleLowerCase();
if(answerThree === 'yes' || answerThree === 'y'){
  // console.log('I did not finish actually, wasn't for me')
  alert('I did not finish actually, it was not for me');
} else if(answerThree === 'no' || answerThree === 'n'){
  alert('Correct, I did not enjoy my time there lol');
}

let answerFour = prompt('Were you in the Army?').toLocaleLowerCase();
if(answerFour=== 'yes' || answerFour === 'y'){
  // console.log('Yes in teh 101st!);
  alert('Yes in the 101st!');
} else if(answerFour === 'no' || answerFour === 'n'){
  alert('4 years actually');
}

let answerFive = prompt('Were you born on a island?').toLocaleLowerCase();
if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('In the most beautiful one!');
  alert('In the most beautiful one!');
} else if(answerFive === 'no' || answerFive === 'n'){
  alert('Carolina, Puerto Rico is the place of my birth');
}
