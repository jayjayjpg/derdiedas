import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ExercisesIndefiniteRoute extends Route {
  @service store;
  @service practiceSession;

  model() {
    return this.store.findAll('indefinite-question');
  }

  afterModel(model) {
    this.practiceSession.reset();
    this.practiceSession.start(model);
  }
}
