import { getRandomNum, gameTemplate, isPrime } from '../index.js';

const prime = () => {
  const toDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = () => {
    const number = getRandomNum();
    const correctAnswer = isPrime(number).toString();
    const expression = number.toString();
    return [expression, correctAnswer];
  };
  gameTemplate(toDo, result);
};

export default prime;
