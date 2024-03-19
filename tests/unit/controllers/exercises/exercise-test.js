import { module, test } from 'qunit';
import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Controller | exercises/exercise', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:exercises/exercise');
    assert.ok(controller);
  });
});
