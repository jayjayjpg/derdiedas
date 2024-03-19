import { module, test } from 'qunit';
import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Service | practice-session', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:practice-session');
    assert.ok(service);
  });
});
