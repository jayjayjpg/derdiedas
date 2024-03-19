import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { service } from '@ember/service';

export default class QuestionFormComponent extends Component {
  @service practiceSession;

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
