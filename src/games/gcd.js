import { gameTemplate, getRandomNum } from '../index.js';

const findGcd = (num1, num2) => {
  let min;
  if (num1 > num2) {
    min = num2;
  } min = num1;

  let divider;
  for (let i = min; i >= 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      divider = i;
      break;
    }
  } return divider;
};

const toDo = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const firstNum = getRandomNum(20);
  const lastNum = getRandomNum();
  const expression = `${firstNum} ${lastNum}`;
  const correctAnswer = String(findGcd(firstNum, lastNum));
  return [expression, correctAnswer];
};

const startGcdGame = () => gameTemplate(toDo, gcd);

export default startGcdGame;
