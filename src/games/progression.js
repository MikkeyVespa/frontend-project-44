import runner from '../index.js';

const rule = 'What number is missing in the progression?';

const createProgression = () => {
  const result = [];
  const stepProgression = (Math.floor(Math.random() * (20 - 0) + 1));
  const randomFirstNumber = (Math.floor(Math.random() * (100 - 0) + 1));
  for (let i = randomFirstNumber, j = 0; j < 10; i += stepProgression, j += 1) {
    result.push(i);
  }
  return result;
};
const getQuestionAndTrueAnswer = () => {
  const startcreateProgression = createProgression();
  const randElemFromArray = [(Math.floor(Math.random() * startcreateProgression.length))];
  const answer = startcreateProgression[randElemFromArray];
  startcreateProgression[randElemFromArray] = '..';
  const question = startcreateProgression.join(' ');
  return [question, String(answer)];
};
const startGame = () => runner(rule, getQuestionAndTrueAnswer);
export default startGame;
