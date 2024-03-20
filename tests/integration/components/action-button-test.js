import { module, test } from 'qunit';
import { setupRenderingTest } from 'derdiedas/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Integration | Component | action-button', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.dummyAction = () => {};
  });

  test('it is accessible (button mode)', async function (assert) {
    await render(hbs`
      <ActionButton @onClick={{this.dummyAction}}>
        checked
      </ActionButton>
    `);

    await a11yAudit();
    assert.ok(true, 'it is accessible');
  });

  test('it is accessible (link mode)', async function (assert) {
    await render(hbs`
      <ActionButton @route="index">
        go to index
      </ActionButton>
    `);

    await a11yAudit();
    assert.ok(true, 'it is accessible');
  });
});
