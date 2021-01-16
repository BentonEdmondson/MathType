module.exports = {
  fonts: [
    { input: 'bold', signal: 'bold' },
    { input: 'double', signal: 'doubleStruck' },
    { input: 'script', signal: 'script' },
    { input: 'mono', signal: 'monospace' },
    { input: 'frak', signal: 'fraktur' },
    { input: 'sans', signal: 'sansSerif' },
    { input: 'rom', signal: 'roman' },
    { input: 'ital', signal: 'italics' },
  ],
  elevations: [
    { input: '^', signal: 'superscript' },
    { input: '_', signal: 'subscript' },
    { input: '|', signal: 'standard' },
  ]
};