import { gameTemplate } from '../index.js';

const gcd = () => {
  const toDo = 'Find the greatest common divisor of given numbers.';
  const result = () => {
    const firstNum = Math.floor(Math.random() * 20 + 1);
    const lastNum = Math.floor(Math.random() * 30 + 1);

    const expression = `${firstNum} ${lastNum}`;
    let min;
    if (firstNum > lastNum) {
      min = lastNum;
    } min = firstNum;

    let divider;
    for (let i = min; i >= 1; i -= 1) {
      if (firstNum % i === 0 && lastNum % i === 0) {
        divider = i;
        break;
      }
    }
    const correctAnswer = divider.toString();
    return [expression, correctAnswer];
  };
  gameTemplate(toDo, result);
};

export default gcd;
