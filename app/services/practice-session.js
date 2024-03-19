import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PracticeSessionService extends Service {
  @tracked questions;
  @tracked currentId = 0;

  get questionIds() {
    return this.questions.map((qu) => qu.id);
  }

  get currentQuestionId() {
    return this.questionIds[this.currentId];
  }

  get numOfQuestions() {
    return this.questionIds.length;
  }

  get isLast() {
    return this.currentId === this.numOfQuestions;
  }

  get score() {
    let numOfCorrectQuestions = this.questions.filter(
      (qu) => qu.isCorrect,
    ).length;
    return (numOfCorrectQuestions / this.numOfQuestions) * 100;
  }

  next() {
    this.currentId += 1;
  }

  reset() {
    this.currentId = 0;
    this.questions = [];
  }
}
