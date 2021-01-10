var fs = require('fs');
var { exec } = require('child_process');
var mappings = require('./combine-mappings');

let ahkScript =
  `#SingleInstance force
#NoEnv
Hotstring("EndChars", "\`n\`t")

SendMode Input

TypeString(variations) {
  toSend := variations["standard"]
  SendRaw, %toSend%
}

global curFont := "italics"
  
TypeAlphanumeral(variations) {
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
    ahkScript += `Hotstring(":*?COX:${mapping.input.replace('"', '""')}", Func("ChangeFont").Bind("${mapping.signal}"))\n`;
    continue;
  }

  if (mapping.input.length === 1) ahkScript += `Hotstring(":*?B0COX:${mapping.input}",`;
  else if (mapping.type === 'romanization') ahkScript += `Hotstring(":*?COX:${mapping.input}",`;
  else ahkScript += `Hotstring(":?COXZ:${mapping.input}",`;

  if (mapping.type === 'alphanumeral') ahkScript += ` Func("TypeAlphanumeral").Bind(`;
  else ahkScript += ` Func("TypeString").Bind(`;

  ahkScript += `${JSON.stringify(mapping.output)}))\n`;
}

ahkScript +=
  `^#!m::Suspend

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
Return`;

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);
exec('start script.ahk');
