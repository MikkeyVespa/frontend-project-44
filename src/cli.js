import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  console.log('Welcome to the Brain Games!');
  const yourname = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${yourname}!`);
};

export default askNameAndGreet;
