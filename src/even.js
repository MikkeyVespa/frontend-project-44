import readlineSync from 'readline-sync';

const playEven = () => {
  console.log('Welcome to the Brain Games!');
  const yourname = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${yourname}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const round = 3;
  for (let i = 0; i < round; i += 1) {
    const generateRendomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${generateRendomNumber}`);
    const trueAnswer = generateRendomNumber % 2 === 0 ? 'yes' : 'no';
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

export default playEven;
