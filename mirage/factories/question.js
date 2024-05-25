import { Factory } from 'miragejs';
import QUESTIONS from './../../questions';

export default Factory.extend({
  type: 'definite_articles',

  raw(i) {
    return QUESTIONS[this.type][i];
  },

  title() {
    let title = this.raw.replace(/\/\w.*\//i, '//$//');
    return title;
  },

  target() {
    let rawTarget = this.raw.match(/\/\w.*\//i)[0];
    return rawTarget?.split('/')[2];
  },

  answer() {
    let rawTarget = this.raw.match(/\/\w.*\//i)[0];
    return rawTarget?.split('/')[1];
  },
});
