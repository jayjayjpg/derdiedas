import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesController extends Controller {
  @service practiceSession;
  @service router;

  get formattedScore() {
    return `${Math.ceil(this.practiceSession.score)} %`;
  }

  @action finish() {
    this.router.refresh('exercises');
    this.router.transitionTo('index');
  }
}
