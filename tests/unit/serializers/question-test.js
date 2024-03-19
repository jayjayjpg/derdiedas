import { module, test } from 'qunit';

import { setupTest } from 'derdiedas/tests/helpers';

module.skip('Unit | Serializer | question', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('question');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('question', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
