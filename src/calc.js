import {
  mathOperator, getRandomNum, gameTemplate,
} from './index.js';

const calculator = () => {
  const toDo = 'What is the result of the expression?';
  const result = () => {
    const firstNum = getRandomNum();
    const lastNum = getRandomNum();
    let operator = mathOperator();
    const expression = `${firstNum} ${operator} ${lastNum}`;
    switch (operator) {
      case '+': operator = firstNum + lastNum;
        break;
      case '-': operator = firstNum - lastNum;
        break;
      case '*': operator = firstNum * lastNum;
        break;
      default: return false;
    }
    const correctAnswer = operator.toString();
    return [expression, correctAnswer];
  };
  gameTemplate(toDo, result);
};

export default calculator;
