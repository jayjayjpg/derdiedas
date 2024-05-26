import BaseModel from 'derdiedas/models/question';
import isDefinite from 'derdiedas/utils/is-definite';

export default class QuestionWeakModel extends BaseModel {
  get hint() {
    let hintComponents = this.answer.trim().split(' ');
    // find article word stem
    let article = hintComponents[0];
    let wordStemPos = article.lastIndexOf('e');
    let articleStem = article.substring(0, wordStemPos);
    // find adjective word stem
    let adjective = hintComponents[1];
    let adjStemPos = adjective.lastIndexOf('e');
    let adjStem = adjective.substring(0, adjStemPos);
    // compose hint message\
    if (isDefinite(article)) {
      return `der/die/das + ${adjStem}...`;
    } else {
      return `${articleStem}er/${articleStem}e/${articleStem}es + ${adjStem}...`;
    }
  }
}
