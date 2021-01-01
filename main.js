var { keywordSets } = require('./initialization/init');
var fs = require('fs');

console.log(keywordSets.general);

let ahkScript =
  `#SingleInstance force
#NoEnv

SendMode Input

^#!m::Suspend


~BS::
~Del::
~Home::
~End::
~PgUp::
~PgDn::
~Left::
~Right::
~LButton::
~RButton::
  Hotstring("Reset")
  if (PendingConfirmation) {
    Send, {del}
  }

Enter::
  Hotstring("Reset")
  if (PendingConfirmation) {
    PendingConfirmation = 0
    Send, {del}
  }

global PendingConfirmation := False

SwapInChar(char, backspaceQty) {
  Send, {bs %backspaceQty%}
  SendRaw, %char%
  if (backspaceQty > 0 and !PendingConfirmation) {
    PendingConfirmation = True
    Send, ⏎{left}
  }
}

`;

for (let keyword of keywordSets.general) {
  ahkScript += `Hotstring(":*?B0COX:${keyword.input}", Func("SwapInChar").Bind("${keyword.output}", ${[...keyword.follows].length - 1}))\n`;
}

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);

