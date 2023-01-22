import {
  getRandomNum, gameTemplate,
} from '../index.js';

const mathOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorSelection = Math.floor(Math.random() * operators.length);
  return operators[operatorSelection];
};

const getResult = (num1, num2, operand) => {
  let result;
  switch (operand) {
    case '+': result = num1 + num2;
      break;
    case '-': result = num1 - num2;
      break;
    case '*': result = num1 * num2;
      break;
    default: throw new Error(`Unknown operator: '${operand}'!`);
  }
  return result.toString();
};

const toDo = 'What is the result of the expression?';

const calculator = () => {
  const firstNum = getRandomNum();
  const lastNum = getRandomNum();
  const operator = mathOperator();
  const expression = `${firstNum} ${operator} ${lastNum}`;
  const correctAnswer = getResult(firstNum, lastNum, operator);
  return [expression, correctAnswer];
};

const startCalcGame = () => gameTemplate(toDo, calculator);

export default startCalcGame;
