import { module, test } from 'qunit';
import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Controller | exercises/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:exercises/index');
    assert.ok(controller);
  });
});
