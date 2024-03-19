import { module, test } from 'qunit';
import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Route | exercises/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:exercises/index');
    assert.ok(route);
  });
});
