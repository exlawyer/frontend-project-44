import {
  gameTemplate,
} from '../index.js';

const progression = () => {
  const toDo = 'What number is missing in the progression?';
  const result = () => {
    const progrStep = Math.floor(Math.random() * 20);
    const numbers = [];
    numbers.length = Math.floor(Math.random() * (20 - 5) + 5);
    let firstNum = Math.floor(Math.random() * 50 + 1);
    for (const number of numbers) {
      numbers.push(firstNum);
      firstNum += progrStep;
    }
    const numberToHide = Math.floor(Math.random() * numbers.length);
    const correctAnswer = numbers[numberToHide].toString();
     numbers[numberToHide] = '..';
     numbers.join(' ');
     const expression = numbers.toString();
     return [expression, correctAnswer];
    };     
  gameTemplate(toDo, result);
  };

  export default progression;
