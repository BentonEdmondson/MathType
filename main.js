var { keywordSets } = require('./initialization/init');
var fs = require('fs');

console.log(keywordSets.general);

let ahkScript =
  `#SingleInstance force
#NoEnv
#Warn

SendMode Input

Suspend, On
^#!m::Suspend

~BS::
~Del::
~Home::
~End::
~PgUp::
~PgDn::
~Left::
~Right::
~Enter::
~LButton::
~RButton::
  Hotstring("Reset")

SwapInChar(char, backspaceQty) {
  Send, {bs %backspaceQty%}
  SendRaw, %char%
}

`;

for (let keyword of keywordSets.general) {
  ahkScript += `Hotstring(":*?B0COX`
  if (keywordSets.general.every(candidateKeyword => !candidateKeyword.follows.slice(0, -1).includes(keyword.output)))
    ahkScript += 'Z';
  ahkScript += `:${keyword.input}", Func("SwapInChar").Bind("${keyword.output}", ${[...keyword.follows].length - 1}))\n`;
}

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);