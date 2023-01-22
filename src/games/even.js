import { getRandomNum, gameTemplate } from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const toDo = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const randNumber = getRandomNum();
  const correctAnswer = isEven(randNumber);
  const expression = randNumber.toString();
  return [expression, correctAnswer];
};

const startEvenGame = () => gameTemplate(toDo, even);

export default startEvenGame;
