import { getRandomNum, gameTemplate } from '../index.js';

const isPrime = (num) => {
  const sqRoot = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqRoot; i += 1) {
    if (num % i === 0 || num < 2) {
      return false;
    }
  } return true;
};

const toDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const number = getRandomNum();
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  const expression = number.toString();
  return [expression, correctAnswer];
};

const startPrimeGame = ()=> gameTemplate(toDo, prime);

export default startPrimeGame;