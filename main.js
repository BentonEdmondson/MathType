var fs = require('fs');
var { exec } = require('child_process');
var mappings = require('./combine-mappings');

let ahkScript =
  `#SingleInstance force
#NoEnv
Hotstring("EndChars", "\`n\`t")

SendMode Input

global curFont := "italics"
global curElevation := "standard"
  
TypeAlphanumeral(variations, numBackspaces) {
  simplifiedVariations := {"standard": variations[curFont], "superscript": variations["superscript"], "subscript": variations["subscript"]}
  TypeString(simplifiedVariations, numBackspaces)
}

TypeString(variations, numBackspaces) {
  Send, {bs %numBackspaces%}
  toSend := variations[curElevation]
  SendRaw, %toSend%
}

ChangeFont(newFont) {
  curFont := newFont
}

ChangeElevation(newElevation) {
  curElevation := newElevation
}

`;

console.log(mappings);
for (let mapping of mappings) {
  if (mapping.type === 'font') {
    ahkScript += `Hotstring(":?COXZ:${mapping.input}", Func("ChangeFont").Bind("${mapping.signal}"))\n`;
    continue;
  }

  if (mapping.type === 'elevation') {
    ahkScript += `Hotstring(":?COXZ:${mapping.input}", Func("ChangeElevation").Bind("${mapping.signal}"))\n`;
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

fs.writeFileSync('script.ahk', '\uFEFF' + ahkScript);
exec('start script.ahk');
