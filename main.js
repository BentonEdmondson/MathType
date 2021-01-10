var fs = require('fs');
var mappings = require('./combine-mappings');

let ahkScript =
  `#SingleInstance force
#NoEnv
Hotstring("EndChars", "\`n\`t")

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

TypeString(variations) {
  toSend := variations["standard"]
  SendRaw, %toSend%
}

TypeAlphanumeral(variations) {
  toSend := variations["italics"]
  SendRaw, %toSend%
}

`;

console.log(mappings);
for (let mapping of mappings) {
  if (mapping.input.length === 1) ahkScript += `Hotstring(":*?B0COX:${mapping.input}",`;
  else if (mapping.type === 'romanization') ahkScript += `Hotstring(":*?COX:${mapping.input}",`;
  else ahkScript += `Hotstring(":?COXZ:${mapping.input}",`;

  if (mapping.type === 'alphanumeral') ahkScript += ` Func("TypeAlphanumeral").Bind(`;
  else ahkScript += ` Func("TypeString").Bind(`;

  ahkScript += `${JSON.stringify(mapping.output)}))\n`;
}

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);
