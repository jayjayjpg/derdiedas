import BaseExerciseOverviewRoute from 'derdiedas/routes/exercises/definite';
import { service } from '@ember/service';

export default class ExercisesIndefiniteRoute extends BaseExerciseOverviewRoute {
  @service store;

  model() {
    return this.store.findAll('indefinite-question');
  }
}
