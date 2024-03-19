import Component from '@glimmer/component';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { service } from '@ember/service';
import { guidFor } from '@ember/object/internals';

export default class QuestionFormComponent extends Component {
  @service practiceSession;

  get formId() {
    return `prompt-input-${guidFor(this)}`;
  }

  get questionPrompt() {
    return this.args.question.fullTitle.split('//$//');
  }

  get isFormDisabled() {
    return isEmpty(this.args.promptAnswer) || this.args.showSolution;
  }

  @action submit() {
    this.args.onSubmit();
  }
}
