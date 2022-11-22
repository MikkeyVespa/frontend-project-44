import readlineSync from 'readline-sync';

const askNameAndGreet = () => {
  const yourname = readlineSync.question('May I have your name?: ');

  console.log(`Hello, ${yourname}!`);
};

export default askNameAndGreet;
