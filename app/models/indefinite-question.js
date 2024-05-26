import BaseModel from 'derdiedas/models/question';

export default class QuestionIndefiniteModel extends BaseModel {
  get hint() {
    return `ein/eine...`;
  }
}
