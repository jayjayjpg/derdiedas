import Model, { attr } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr title;
  @attr raw;
  @attr answer;
  @attr target;
  @attr userAnswer;
  @attr answerOptions;
  @attr type;

  get fullTitle() {
    return `${this.title.replace(`//$//`, `//$// ${this.target}`)}`;
  }

  get fullAnswer() {
    return `${this.fullTitle.replace(`//$//`, ` ${this.answer}`)}`;
  }

  get isCorrect() {
    return this.answer?.trim() === this.userAnswer?.trim();
  }

  get definedArticle() {
    return this.type === 'definite_articles';
  }

  get undefiniteArticle() {
    return this.type === 'indefinite_articles';
  }
}
