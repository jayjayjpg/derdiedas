import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ExercisesRoute extends Route {
  @service store;
  @service practiceSession;

  model() {
    return this.store.findAll('question');
  }

  afterModel(model) {
    this.practiceSession.reset();
    this.practiceSession.questions = model;
  }
}
