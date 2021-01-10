module.exports = {
  fonts: [
    { input: 'bb"', signal: 'bold' },
    { input: 'bbb"', signal: 'doubleStruck' },
    { input: 'cc"', signal: 'script' },
    { input: 'tt"', signal: 'monospace' },
    { input: 'fr"', signal: 'fraktur' },
    { input: 'sf"', signal: 'sansSerif' },
    { input: '"', signal: 'romanOrClosingQuote' },
  ],
  elevations: [
    { input: '^', signal: 'exponent' },
    { input: '_', signal: 'subscript' },
  ]
};