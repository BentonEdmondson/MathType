var keywordSets = require('./keyword-sets');
var prepareKeywordSet = require('./prepare-keyword-set');

for (var keywordSet of Object.values(keywordSets)) {
  prepareKeywordSet(keywordSet);
  keywordSet.sort((a, b) => b.input.length - a.input.length);
}

module.exports = { keywordSets };