import runner from '../index.js';

const rule = 'What is the result of the expression?';
const getQuestionAndTrueAnswer = () => {
  const firstOperand = Math.floor(Math.random() * 50);
  const secondOperand = Math.floor(Math.random() * 50);
  const operators = ['-', '+', '*'];
  const operatorForExpressions = operators[Math.floor(Math.random() * operators.length)];
  const question = `${firstOperand} ${operatorForExpressions} ${secondOperand}`;
  let answer;
  if (operatorForExpressions === '-') {
    answer = firstOperand - secondOperand;
  } else if (operatorForExpressions === '+') {
    answer = firstOperand + secondOperand;
  } else {
    answer = firstOperand * secondOperand;
  }
  return [question, String(answer)];
};
const startGame = () => runner(rule, getQuestionAndTrueAnswer);
export default startGame;
