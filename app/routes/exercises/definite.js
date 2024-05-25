import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ExercisesDefiniteRoute extends Route {
  @service store;
  @service practiceSession;

  model() {
    return this.store.findAll('question');
  }

  afterModel(model) {
    this.practiceSession.reset();
    this.practiceSession.start(model);
  }
}
