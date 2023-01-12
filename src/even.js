import readlineSync from 'readline-sync';

export default checkResult = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} !`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 50);
    const randomNumberEven = randomNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const inputAnswer = readlineSync.question('Your answer:');
    if (randomNumberEven === inputAnswer) {
      console.log('Correct!');
    } console.log(`${inputAnswer} is wrong answer ;(. Correct answer was ${randomNumberEven}.
    Let's try again, ${name}!`);
  } console.log(`Congratulations, ${name}!`);
};
