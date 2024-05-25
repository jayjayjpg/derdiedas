import { module, test } from 'qunit';
import { click, fillIn, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'derdiedas/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | a11y| de/exercises', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.server.createList('question', 3);
  });

  test('page is accessible: exercises', async function (assert) {
    await visit('/exercises');
    await a11yAudit();

    assert.ok(true, 'all good');
  });

  test('page is accessible: exercises/:id', async function (assert) {
    await visit('/exercises/1');
    await a11yAudit();

    assert.ok(true, 'all good');
  });

  test('it is accessible: exercises/:id success state', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-choose-definite]');
    await click('[data-test-exercise-start]');
    await fillIn('[data-test-question-form-input]', 'das');
    await click('[data-test-question-form-submit]');

    await a11yAudit();

    assert.ok(true, 'all good');
  });

  test('it is accessible: exercises/:id error state', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-choose-definite]');
    await click('[data-test-exercise-start]');
    await fillIn('[data-test-question-form-input]', 'foo');
    await click('[data-test-question-form-submit]');
    await a11yAudit();

    assert.ok(true, 'all good');
  });

  test('it is accessible: exercises/:id result page', async function (assert) {
    await visit('/exercises');
    // start the practice session
    await click('[data-test-exercise-choose-definite]');
    await click('[data-test-exercise-start]');

    // finish the practice session
    await fillIn('[data-test-question-form-input]', 'der');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');
    await fillIn('[data-test-question-form-input]', 'die');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');
    await fillIn('[data-test-question-form-input]', 'das');
    await click('[data-test-question-form-submit]');

    await a11yAudit();

    assert.ok(true, 'all good');
  });
});
