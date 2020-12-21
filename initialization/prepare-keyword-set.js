var swapInSymbol = require('../helpers/swap-in-symbol');

module.exports = symbolSet => {

  sortSymbolSetFromSmallestToLargest(symbolSet);
  for (let symbol of symbolSet) {
    let symbolArray = [...symbol.input];
    symbolArray.follows = '';
    for (let charsTilEnd = symbolArray.length - 1; charsTilEnd > 0; charsTilEnd--) {
      let symbolSubsection = symbolArray.splice(0, symbolArray.length - charsTilEnd);
      let newSymbolSubsection = swapInSymbol(symbolSubsection, symbolSet) || symbolSubsection;
      let newSymbol = newSymbolSubsection.concat(symbolArray);
      symbolArray = newSymbol;
    }
    symbol.follows = symbolArray.join('');
  }

  function sortSymbolSetFromSmallestToLargest(symbolSet) {
    symbolSet.sort((symbolOne, symbolTwo) => symbolOne.input.length - symbolTwo.input.length);
  }

}