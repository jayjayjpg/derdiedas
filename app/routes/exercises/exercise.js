import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class ExercisesExerciseRoute extends Route {
  @service store;
  @service practiceSession;

  model(params) {
    let type = this.practiceSession.type;
    if (type === 'definite_articles') {
      return this.store.peekRecord('question', params.exercise_id);
    } else if (type === 'indefinite_articles') {
      return this.store.peekRecord('indefinite-question', params.exercise_id);
    }
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
