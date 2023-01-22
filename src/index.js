import readlineSync from 'readline-sync';

const getRandomNum = (max = 30, step = 1) => {
  const random = Math.floor(Math.random() * max + step);
  return random;
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
  getRandomNum, gameTemplate,
};
