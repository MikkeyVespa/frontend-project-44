import gcd from 'compute-gcd';
import runner from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getQuestionAndTrueAnswer = () => {
  const firstNumber = Math.floor(Math.random() * (100 - 0) + 1);
  const secondNumber = Math.floor(Math.random() * (100 - 0) + 1);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = gcd(firstNumber, secondNumber);
  return [question, String(answer)];
};
const startGame = () => runner(rule, getQuestionAndTrueAnswer);
export default startGame;
