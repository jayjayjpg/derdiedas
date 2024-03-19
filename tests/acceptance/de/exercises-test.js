import { module, test } from 'qunit';
import { click, fillIn, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'derdiedas/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | de/exercises', function (hooks) {
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

  test('visiting /exercises', async function (assert) {
    await visit('/exercises');

    assert.strictEqual(currentURL(), '/exercises');
    assert.dom('[data-test-exercise-go-back-home]').exists();
    assert.dom('[data-test-exercise-primer]').exists();
    assert.dom('[data-test-exercise-start]').exists();
  });

  test('a user can start the practice session', async function (assert) {
    await visit('/exercises');

    assert.strictEqual(currentURL(), '/exercises');

    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');
    assert.dom('[data-test-question-form-prompt]').exists();
  });

  test('a user can exit a practice session', async function (assert) {
    await visit('/exercises');

    assert.strictEqual(currentURL(), '/exercises');

    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await click('[data-test-exercise-exit]');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-question-form-prompt]').doesNotExist();
  });

  test('a user can proceed to the next question once the form is submitted', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'das');
    await click('[data-test-question-form-submit]');

    assert.dom('[data-test-exercise-next]').exists();
    assert.dom('[data-test-exercise-finish]').doesNotExist();
  });

  test('a user sees a success state if an answer is answered correctly', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'das');
    await click('[data-test-question-form-submit]');

    assert
      .dom('[data-test-question-form-correct-answer]')
      .includesText('Ich gehe in das Haus');
    assert.dom('[data-test-question-form-success]').exists();
    assert.dom('[data-test-question-form-difference]').doesNotExist();
  });

  test('a user sees an error explanation if an answer is answered incorrectly', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'foo');
    await click('[data-test-question-form-submit]');

    assert
      .dom('[data-test-question-form-correct-answer]')
      .includesText('Ich gehe in das Haus');
    assert.dom('[data-test-question-form-success]').doesNotExist();
    assert.dom('[data-test-question-form-difference]').exists();
    assert
      .dom('[data-test-question-form-difference-current]')
      .includesText('foo');
    assert
      .dom('[data-test-question-form-difference-expected]')
      .includesText('das');
  });

  test('a user can finish a practice session', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'der');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');

    assert.strictEqual(currentURL(), '/exercises/2');

    await fillIn('[data-test-question-form-input]', 'die');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');

    assert.strictEqual(currentURL(), '/exercises/3');

    await fillIn('[data-test-question-form-input]', 'das');
    await click('[data-test-question-form-submit]');

    assert.dom('[data-test-exercise-score]').includesText('0 %');

    await click('[data-test-exercise-finish]');

    assert.strictEqual(currentURL(), '/');
    assert.dom('[data-test-question-form-prompt]').doesNotExist();
  });

  test('exiting the session resets its state', async function (assert) {
    await visit('/exercises');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'der');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');

    assert.strictEqual(currentURL(), '/exercises/2');

    await click('[data-test-exercise-exit]');

    assert.strictEqual(currentURL(), '/');

    await click('[data-test-navigation-exercise-de]');
    await click('[data-test-exercise-start]');

    assert.strictEqual(currentURL(), '/exercises/1');

    await fillIn('[data-test-question-form-input]', 'der');
    await click('[data-test-question-form-submit]');
    await click('[data-test-exercise-next]');

    assert.strictEqual(currentURL(), '/exercises/2');
  });
});
