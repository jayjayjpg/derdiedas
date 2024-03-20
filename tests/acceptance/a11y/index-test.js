import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'derdiedas/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | a11y | index', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('page is accessible', async function (assert) {
    await visit('/');
    await a11yAudit();

    assert.ok(true, 'all good');
  });
});
