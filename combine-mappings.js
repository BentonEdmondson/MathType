var conversions = require('./mappings/conversions');
var elevations = require('./mappings/elevations');
var fonts = require('./mappings/fonts');
var romanizations = require('./mappings/romanizations');
var keywords = require('./mappings/keywords');

var romanFontArray = Object.entries(fonts.roman).map(([input, output]) => ({
  input,
  type: 'alphanumeral',
  output: {
    standard: output,
  },
}));
var conversionsArray = conversions.map(({ input, output }) => ({
  input,
  type: 'symbol',
  output: {
    standard: output,
  },
}));

var combinedMappings = [...conversionsArray, ...romanFontArray];

combinedMappings.forEach(term => {
  term.output.superscript = elevations.superscripts[term.output.standard];
  term.output.subscript = elevations.subscripts[term.output.standard];
});

combinedMappings.forEach(term => {
  if (term.type === 'alphanumeral') {
    for (var [fontName, fontMap] of Object.entries(fonts)) {
      term.output[fontName] = fontMap[term.input];
    }
    delete term.output.standard;
  }
});

romanizationsObjects = romanizations.map(romanization => ({
  input: romanization,
  type: 'romanization',
  output: {
    standard: romanization,
  },
}));

combinedMappings = [...combinedMappings, ...romanizationsObjects];

combinedMappings.sort((a, b) => b.input.length - a.input.length);

keywords.fonts.forEach(fontKeyword => {
  fontKeyword.type = 'keyword'
});

combinedMappings = [...keywords.fonts, ...combinedMappings];

module.exports = combinedMappings;