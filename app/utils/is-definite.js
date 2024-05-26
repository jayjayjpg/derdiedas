export default function isDefinite(word) {
  let prompt = word.trim().toLowerCase();
  let definiteArticles = ['der', 'die', 'das', 'dem', 'den'];
  return definiteArticles.includes(prompt);
}
