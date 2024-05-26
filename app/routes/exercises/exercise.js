import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class ExercisesExerciseRoute extends Route {
  @service store;
  @service practiceSession;

  model(params) {
    let type = this.practiceSession.type;
    let modelName = 'question';
    if (type === 'definite_articles') {
      modelName = 'question';
    } else if (type === 'indefinite_articles') {
      modelName = 'indefinite-question';
    } else if (type === 'weak_attributes') {
      modelName = 'weak-question';
    }

    return this.store.peekRecord(modelName, params.exercise_id);
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
