import {
  gameTemplate, getRandomNum,
} from '../index.js';

const generateProgression = (firstNum, step, length) => {
  const numbers = [];
  let numberRow = firstNum;
  for (let i = 0; i <= length; i += 1) {
    numbers.push(numberRow);
    numberRow += step;
  }
  return numbers;
};

const toDo = 'What number is missing in the progression?';

const progression = () => {
  const firstNum = getRandomNum(50);
  const progrStep = getRandomNum(20);
  const progrLength = getRandomNum((20 - 5), 5);
  const fullProgression = generateProgression(firstNum, progrStep, progrLength);
  const numberToHide = getRandomNum(fullProgression.length);
  const correctAnswer = String(fullProgression[numberToHide]);
  fullProgression[numberToHide] = '..';
  const expression = fullProgression.join(' ');
  return [expression, correctAnswer];
};

const startProgressionGame = () => gameTemplate(toDo, progression);

export default startProgressionGame;
