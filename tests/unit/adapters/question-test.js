import { module, test } from 'qunit';

import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Adapter | question', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:question');
    assert.ok(adapter);
  });
});
