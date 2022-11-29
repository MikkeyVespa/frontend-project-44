import readlineSync from 'readline-sync';

const runner = (rulesGame, questionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const yourname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourname}!`);
  console.log(rulesGame);

  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const [question, trueAnswer] = questionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== trueAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${yourname}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${yourname}!`);
};

export default runner;
