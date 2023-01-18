import readlineSync from 'readline-sync';

const getRandomNum = () => {
  const random = Math.floor(Math.random() * 30 + 1);
  return random;
};

const mathOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorSelection = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorSelection];
  return operator;
};

const isPrime = (num) => {
  if (num < 2) return 'no';
  const q = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= q; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  } return 'yes';
};

const gameTemplate = (toDo, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(toDo);
  for (let i = 0; i < 3; i += 1) {
    const [expression, correctAnswer] = task();
    console.log(`Question: ${expression}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    if (inputAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export {
  mathOperator, getRandomNum, gameTemplate, isPrime,
};
