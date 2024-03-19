import { module, test } from 'qunit';
import { setupRenderingTest } from 'derdiedas/tests/helpers';
import { fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Integration | Component | question-form', function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    let qu = this.server.create('question');
    let correct = this.server.create('question', {
      userAnswer: 'foo',
      answer: 'foo',
    });
    let store = this.owner.lookup('service:store');
    this.question = await store.findRecord('question', qu.id);
    this.answeredQuestion = await store.findRecord('question', correct.id);
    this.dummyAction = () => {};
  });

  test('it renders (initial state)', async function (assert) {
    await render(
      hbs`<QuestionForm
        @question={{this.question}}
        @onChange={{this.dummyAction}}
        @onSubmit={{this.dummyAction}}
        @showSolution={{false}}
        @promptAnswer="abc"
      />
    `,
    );

    assert.dom('[data-test-question-form]').exists();
    assert.dom('[data-test-question-form-prompt]').includesText('Ich gehe in');
    assert.dom('[data-test-question-form-input]').hasValue('abc');
    assert
      .dom('[data-test-question-form-hint]')
      .includesText('Use der/die/das');
    assert.dom('[data-test-question-form-submit]').exists();
    assert.dom('[data-test-question-form-correct-answer]').doesNotExist();
    assert.dom('[data-test-question-form-success]').doesNotExist();
    assert.dom('[data-test-question-form-difference]').doesNotExist();
  });

  test('it disables the form if the prompt is empty', async function (assert) {
    await render(
      hbs`<QuestionForm
        @question={{this.question}}
        @onChange={{this.dummyAction}}
        @onSubmit={{this.dummyAction}}
        @showSolution={{false}}
        @promptAnswer=""
      />
    `,
    );

    assert.dom('[data-test-question-form-input]').hasValue('');
    assert.dom('[data-test-question-form-submit]').isDisabled();
  });

  test('it enables the form if the prompt is provided', async function (assert) {
    await render(
      hbs`<QuestionForm
        @question={{this.question}}
        @onChange={{this.dummyAction}}
        @onSubmit={{this.dummyAction}}
        @showSolution={{false}}
        @promptAnswer="das"
      />
    `,
    );

    await fillIn('[data-test-question-form-input]', 'das');
    assert.dom('[data-test-question-form-input]').hasValue('das');
    assert.dom('[data-test-question-form-submit]').isNotDisabled();
  });

  test('it shows the success state if the correct answer is submitted', async function (assert) {
    await render(
      hbs`<QuestionForm
        @question={{this.answeredQuestion}}
        @onChange={{this.dummyAction}}
        @onSubmit={{this.dummyAction}}
        @showSolution={{true}}
        @promptAnswer="das"
      />
    `,
    );

    assert.dom('[data-test-question-form-submit]').isDisabled();
    assert
      .dom('[data-test-question-form-correct-answer]')
      .includesText('Ich schenke foo Lehrer einen Apfel');
    assert.dom('[data-test-question-form-success]').exists();
    assert.dom('[data-test-question-form-difference]').doesNotExist();
  });
});
