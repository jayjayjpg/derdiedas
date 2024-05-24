import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class ExercisesExerciseRoute extends Route {
  @service store;
  @service practiceSession;

  model(params) {
    return this.store.peekRecord('question', params.exercise_id);
  }

  afterModel(model) {
    if (isEmpty(model)) {
      throw new Error('Unable to load question. Go back home to try again');
    }
  }

  resetController(controller, model) {
    super.resetController(controller, model);
    controller.showSolution = false;
    controller.promptAnswer = null;
  }
}
