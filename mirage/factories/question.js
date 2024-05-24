import { Factory, trait } from 'miragejs';
import QUESTIONS from './../../questions';

export default Factory.extend({
  type: 'definite_articles',
  questionList() {
    return QUESTIONS[this.type];
  },

  raw(i) {
    console.log({ typ: this.type, qu: QUESTIONS[this.type] })
    return this.questionList[i];
  },

  title(i) {
    let question = this.raw;
    let title = question?.replace(/\/\w.*\//i, '//$//');
    return title;
  },

  target(i) {
    let question = this.raw;
    let rawTarget = question?.match(/\/\w.*\//i)[0];
    return rawTarget?.split('/')[2];
  },

  answer(i) {
    let question = this.raw;
    let rawTarget = question?.match(/\/\w.*\//i)[0];
    return rawTarget?.split('/')[1];
  },

  definite: trait({
    type: 'definite_articles',
  }),

  indefinite: trait({
    type: 'indefinite_articles',
  }),
});
