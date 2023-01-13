import readlineSync from 'readline-sync';
import getRandomNum from './index.js';

const checkResult = () => {
  console.log('Welcome to the Brain Games!');
  let correctAnsw = 0;
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = getRandomNum();
    const randomNumberEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    if (randomNumberEven === inputAnswer) {
      correctAnsw += 1;
      console.log('Correct!');
    } else {
      console.log(`${inputAnswer} is wrong answer ;(. Correct answer was ${randomNumberEven}.
Let's try again, ${name}!`);
      break;
    }
    if (correctAnsw === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default checkResult;
