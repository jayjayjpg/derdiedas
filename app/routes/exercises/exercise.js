import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ExercisesExerciseRoute extends Route {
  @service store;
  @service practiceSession;

  model(params) {
    return this.store.peekRecord('question', params.exercise_id);
  }

  resetController(controller, model) {
    super.resetController(controller, model);
    controller.showSolution = false;
    controller.promptAnswer = null;
  }
}
