import {
  getRandomNum, gameTemplate,
} from '../index.js';

const mathOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorSelection = Math.floor(Math.random() * operators.length);
  return operators[operatorSelection];
};

const getResult = (num1, num2, operand) => {
  switch (operand) {
    case '+': operand = num1 + num2;
      break;
    case '-': operand = num1 - num2;
      break;
    case '*': operand = num1 * num2;
      break;
    default: throw new Error(`Unknown operator: '${operator}'!`);
    }
  return operand.toString();
};

const toDo = 'What is the result of the expression?';
  
const calculator = () => {
  const firstNum = getRandomNum();
  const lastNum = getRandomNum();
  let operator = mathOperator();
  const expression = `${firstNum} ${operator} ${lastNum}`;
  const correctAnswer = getResult(firstNum, lastNum, operator);
  return [expression, correctAnswer];
};

const startCalcGame = ()=> gameTemplate(toDo, calculator);

export default startCalcGame;