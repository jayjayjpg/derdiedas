import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesController extends Controller {
  @service practiceSession;
  @service router;

  get formattedScore() {
    return `${Math.ceil(this.practiceSession.score)} %`;
  }

  get showResult() {
    return this.practiceSession.isLast && this.practiceSession.isActive;
  }

  @action finish() {
    this.router.refresh('exercises');
    this.router.transitionTo('index');
    this.practiceSession.reset();
  }
}
