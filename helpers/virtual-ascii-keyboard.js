const { app, globalShortcut } = require('electron')

module.exports = callback => {

  app.whenReady().then(() => {
    for (var i = 32; i <= 126; i++) {
      let acceleratorSyntaxOfChar = charToAcceleratorSyntax(String.fromCharCode(i));

      console.log(`Registering: ${acceleratorSyntaxOfChar}`);
      let ret = globalShortcut.register(acceleratorSyntaxOfChar, () => {
        callback(acceleratorSyntaxToChar(acceleratorSyntaxOfChar));
      })

      if (!globalShortcut.isRegistered(acceleratorSyntaxOfChar)) {
        console.log(`Registration of ${acceleratorSyntaxOfChar} supposedly failed.`);
      }
    }
  });

  app.on('will-quit', () => {
    globalShortcut.unregisterAll()
  });

  function charToAcceleratorSyntax(char) {
    if (char === ' ') return 'Space';
    if (char === '+') return 'Plus';

    if (!isALatinLetter(char)) return char;

    if (char === char.toLowerCase()) return char.toUpperCase();
    if (char === char.toUpperCase()) return `Shift+${char}`;
  }

  function acceleratorSyntaxToChar(acceleratorSyntax) {
    if (acceleratorSyntax === 'Space') return ' ';
    if (acceleratorSyntax === 'Plus') return '+';

    if (!isALatinLetter(acceleratorSyntax)) return acceleratorSyntax;

    if (!acceleratorSyntax.startsWith('Shift+')) return acceleratorSyntax.toLowerCase();
    if (acceleratorSyntax.startsWith('Shift+')) return acceleratorSyntax.slice(6);
  }

  function isALatinLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }

};