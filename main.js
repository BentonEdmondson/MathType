var fs = require('fs');
var { exec } = require('child_process');
var mappings = require('./combine-mappings');

let ahkScript =
  `#SingleInstance force
#NoEnv
Hotstring("EndChars", "\`n\`t")

SendMode Input

TypeString(variations, numBackspaces) {
  Send, {bs %numBackspaces%}
  toSend := variations["standard"]
  SendRaw, %toSend%
}

global curFont := "italics"
  
TypeAlphanumeral(variations, numBackspaces) {
  Send, {bs %numBackspaces%}
  toSend := variations[curFont]
  SendRaw, %toSend%
}

ChangeFont(newFont) {
  if (newFont = "romanOrClosingQuote") {
    if (curFont = "italics") {
      curFont := "roman"
    } else {
      curFont := "italics"
    }
  } else {
    curFont := newFont
  }
}

`;

console.log(mappings);
for (let mapping of mappings) {
  if (mapping.type === 'keyword') {
    ahkScript += `Hotstring(":*?COXZ:${mapping.input.replace('"', '""')}", Func("ChangeFont").Bind("${mapping.signal}"))\n`;
    continue;
  }

  if (mapping.type === 'romanization') {
    ahkScript += `Hotstring(":*?B0COX:${mapping.input}", Func("TypeString").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length - 1}))\n`;
    continue;
  }

  if (mapping.type === 'symbol' || mapping.type === 'alphanumeral') {
    if (mapping.input.length === 1 || mapping.input === '  ') {
      ahkScript += `Hotstring(":*?B0COX:${mapping.input}", Func("${{ 'alphanumeral': 'TypeAlphanumeral', 'symbol': 'TypeString' }[mapping.type]}").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length - 1}))\n`;
      continue;
    } else {
      ahkScript += `Hotstring(":?B0COXZ:${mapping.input}", Func("${{ 'alphanumeral': 'TypeAlphanumeral', 'symbol': 'TypeString' }[mapping.type]}").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length}))\n`;
      continue;
    }
  }
}

ahkScript +=
  `
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
Return
`;

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);
exec('start script.ahk');
