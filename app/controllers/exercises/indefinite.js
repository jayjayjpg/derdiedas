import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesIndefiniteController extends Controller {
  @service practiceSession;

  @action noop() {}
}
