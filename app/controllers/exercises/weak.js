import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesWeakController extends Controller {
  @service practiceSession;

  @action noop() {}
}
