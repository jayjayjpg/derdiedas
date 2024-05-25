import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesDefiniteController extends Controller {
  @service practiceSession;

  @action noop() {}
}
