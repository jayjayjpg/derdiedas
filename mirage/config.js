import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
import appConfig from 'derdiedas/config/environment';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
  this.get('/questions', (schema) => {
    return schema.questions.all();
  });

  this.get('/questions/:id');
  this.patch('/questions/:id');

  if (
    appConfig.environment === 'production' ||
    appConfig.environment === 'development'
  ) {
    this.get('/questions', (schema, req) => {
      let selected = [];
      let type = req?.queryParams?.type || 'definite_articles';
      let questions = schema.questions.where({ type });
      let numOfQuestions = questions.length;

     while (selected.length < 3) {
        let rando = Math.floor(Math.random() * numOfQuestions);
        let randoId = questions.models[rando].id;
        if (selected.indexOf(randoId) === -1) {
          selected.push(randoId);
        }
      }

      return schema.questions.where(qu => { return qu.type === type && selected.indexOf(qu.id) !== -1 });
    });
  }
}
