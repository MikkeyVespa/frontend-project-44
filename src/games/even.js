import runner from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndTrueAnswer = () => {
  const question = Math.floor(Math.random() * (100 - 0) + 1);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
const startGame = () => runner(rule, getQuestionAndTrueAnswer);
export default startGame;
