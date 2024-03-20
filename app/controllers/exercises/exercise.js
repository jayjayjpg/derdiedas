import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class ExercisesExerciseController extends Controller {
  @tracked
  promptAnswer;

  @tracked
  showSolution = false;

  @service
  practiceSession;

  @service
  router;

  get isFinished() {
    return this.practiceSession.isLast && this.showSolution;
  }

  @action changePrompt(a) {
    let value = a.target.value;
    this.promptAnswer = value;
  }

  @action exit() {
    this.router.refresh('exercises');
    this.router.transitionTo('index');
  }

  @action submitByKeyboard() {
    // console.log({ e });
  }

  @action submit() {
    if (!this.practiceSession.isLast) {
      this.practiceSession.next();
    }
    this.model.userAnswer = this.promptAnswer;
    this.model.save();
    this.showSolution = true;
  }
}
