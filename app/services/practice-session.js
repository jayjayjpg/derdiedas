import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { isPresent } from '@ember/utils';

export default class PracticeSessionService extends Service {
  @tracked questions = [];
  @tracked currentId = 0;
  @tracked isActive = false;

  get questionIds() {
    return this.questions.map((qu) => qu.id);
  }

  get currentQuestionId() {
    let existingId = this.questionIds[this.currentId];
    if (existingId) {
      return existingId;
    }
    return 1;
  }

  get numOfQuestions() {
    return this.questionIds.length;
  }

  get isLast() {
    return isPresent(this.questions) && this.currentId === this.numOfQuestions;
  }

  get score() {
    let numOfCorrectQuestions = this.questions.filter(
      (qu) => qu.isCorrect,
    ).length;
    return (numOfCorrectQuestions / this.numOfQuestions) * 100;
  }

  get type() {
    return this.questions[0]?.type;
  }

  start(questions) {
    this.questions = questions;
    this.isActive = true;
  }

  next() {
    this.currentId += 1;
  }

  reset() {
    this.currentId = 0;
    this.questions = [];
    this.isActive = false;
  }
}
