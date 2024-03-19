import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ExercisesIndexController extends Controller {
  @service practiceSession;
}
