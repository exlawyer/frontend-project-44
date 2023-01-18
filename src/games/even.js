import { getRandomNum, gameTemplate } from '../index.js';

const checkResult = () => {
  const toDo = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = () => {
    const randNumber = getRandomNum();
    const correctAnswer = randNumber % 2 === 0 ? 'yes' : 'no';
    const expression = randNumber.toString();
    return [expression, correctAnswer];
  };
  gameTemplate(toDo, result);
};
export default checkResult;
