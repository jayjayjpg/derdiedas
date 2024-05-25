import EmberRouter from '@ember/routing/router';
import config from 'derdiedas/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('exercises', function () {
    this.route('exercise', { path: '/:exercise_id' });
    this.route('definite');
    this.route('indefinite');
  });
});
