import {
  gameTemplate, getRandomNum
} from '../index.js';

const generateProgression = (firstNumber, step, length) => {
  const numbers = [];
   for (let i = 0; i <= length; i += 1) {
     numbers.push(firstNumber);
     firstNumber += step;
   } 
   return numbers;
};

const toDo = 'What number is missing in the progression?';

const progression = () => {
  let firstNum = getRandomNum(50);
  const progrStep = getRandomNum (20);
  const progrLength = getRandomNum((20-5), 5);
  const fullProgression = generateProgression(firstNum, progrStep, progrLength);  
  const numberToHide = getRandomNum(fullProgression.length);
  const correctAnswer = fullProgression[numberToHide].toString();
  fullProgression[numberToHide] = '..';
  const toJoin = fullProgression.join(' ');
  const expression = toJoin.toString();
    return [expression, correctAnswer];
  };

const startProgressionGame = ()=> gameTemplate(toDo, progression);

export default startProgressionGame;