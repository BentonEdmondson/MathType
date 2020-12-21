module.exports = (text, symbolSet) => {
  text = [...text];
  for (var i = symbolSet.length - 1; i >= 0; i--) {
    let symbol = symbolSet[i];
    if (text.join('').endsWith(symbol.follows)) {
      return text.splice(0, text.length - [...symbol.follows].length).concat([...symbol.output]);
    }
  }
}