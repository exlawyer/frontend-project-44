import {
  gameTemplate,
} from '../index.js';

const progression = () => {
  const toDo = 'What number is missing in the progression?';
  const result = () => {
    const progrStep = Math.floor(Math.random() * 20);
    const numbers = [];
    const arrLength = Math.floor(Math.random() * (20 - 5) + 5);
    let firstNum = Math.floor(Math.random() * 50 + 1);
    for (let i = 0; i <= arrLength; i += 1) {
      numbers.push(firstNum);
      firstNum += progrStep;
    }
    const numberToHide = Math.floor(Math.random() * numbers.length);
    const correctAnswer = numbers[numberToHide].toString();
    numbers[numberToHide] = '..';
    const term = numbers.join(' ');
    const expression = term.toString();
    return [expression, correctAnswer];
  };
  gameTemplate(toDo, result);
};

export default progression;
