import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'derdiedas/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting the home page', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-navigation-home]').exists();
    assert.dom('[data-test-navigation-exercise-de]').exists();
  });

  test('it allows navigating to the exercises route', async function (assert) {
    await visit('/');

    await click('[data-test-navigation-exercise-de]');
    assert.strictEqual(currentURL(), '/exercises');
  });
});
