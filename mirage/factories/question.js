import { Factory } from 'miragejs';
import QUESTIONS from './../../questions';

export default Factory.extend({
  title(i) {
    let question = QUESTIONS.titles[i];
    return question.title;
  },

  target(i) {
    let question = QUESTIONS.titles[i];
    return question.target;
  },

  answer(i) {
    let question = QUESTIONS.titles[i];
    return question.answer;
  },

  definedArticle(i) {
    let question = QUESTIONS.titles[i];
    return question.definedArticle;
  },
});
