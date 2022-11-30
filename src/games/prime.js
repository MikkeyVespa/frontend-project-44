import runner from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndTrueAnswer = () => {
  const result = [];
  const question = Math.floor(Math.random() * (50 - 0) + 2);
  for (let divider = 1; divider <= question; divider += 1) {
    if (question % divider === 0) {
      result.push(divider);
    }
  }
  const answer = result.length === 2 ? 'yes' : 'no';
  return [question, answer];
};
const startGame = () => runner(rule, getQuestionAndTrueAnswer);
export default startGame;
