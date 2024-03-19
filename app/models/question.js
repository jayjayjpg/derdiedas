import Model, { attr } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr title;
  @attr answer;
  @attr target;
  @attr userAnswer;
  @attr answerOptions;
  @attr definedArticle;

  get fullTitle() {
    return `${this.title.replace(`//$//`, `//$// ${this.target}`)}`;
  }

  get fullAnswer() {
    return `${this.fullTitle.replace(`//$//`, ` ${this.answer}`)}`;
  }

  get isCorrect() {
    return this.answer?.trim() === this.userAnswer?.trim();
  }
}
