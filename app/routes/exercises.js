import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ExercisesRoute extends Route {
  @service practiceSession;
}
