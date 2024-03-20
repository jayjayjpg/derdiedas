import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ExercisesIndexController extends Controller {
  @service practiceSession;

  @action noop() {}
}
