import { Factory } from 'miragejs';
import QUESTIONS from './../../questions';

export default Factory.extend({
  title(i) {
    let question = QUESTIONS.titles[i];
    let title = question.replace(/\/\w.*\//i, '//$//');
    return title;
  },

  target(i) {
    let question = QUESTIONS.titles[i];
    let rawTarget = question.match(/\/\w.*\//i)[0];
    return rawTarget.split('/')[2];
  },

  answer(i) {
    let question = QUESTIONS.titles[i];
    let rawTarget = question.match(/\/\w.*\//i)[0];
    return rawTarget.split('/')[1];
  },

  definedArticle() {
    let article = this.answer.toLowerCase();
    return article.startsWith('d');
  },
});
