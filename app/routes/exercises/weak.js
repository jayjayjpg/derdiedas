import BaseExerciseOverviewRoute from 'derdiedas/routes/exercises/definite';
import { service } from '@ember/service';

export default class ExercisesWeakRoute extends BaseExerciseOverviewRoute {
  @service store;

  model() {
    return this.store.findAll('weak-question');
  }
}
