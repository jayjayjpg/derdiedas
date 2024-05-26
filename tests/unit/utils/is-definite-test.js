import isDefinite from 'derdiedas/utils/is-definite';
import { module, test } from 'qunit';

module('Unit | Utility | is-definite', function () {
  test('it returns true if a definite article is passed', function (assert) {
    let result = isDefinite('der');
    assert.ok(result);
  });

  test('it returns false if an indefinite article is passed', function (assert) {
    let result = isDefinite('ein');
    assert.notOk(result);
  });

  test('it is case insensitive', function (assert) {
    let result = isDefinite('Das');
    assert.ok(result);
  });

  test('it ignores extra whitespace', function (assert) {
    let result = isDefinite('Die ');
    assert.ok(result);
  });
});
