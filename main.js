var fs = require('fs');
var { exec } = require('child_process');
var mappings = require('./combine-mappings');

let script =
  `#SingleInstance force
#NoEnv
Hotstring("EndChars", "\`t")

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

for (let mapping of mappings) {
  if (mapping.type === 'font') {
    script += `Hotstring(":?COXZ:${mapping.input}", Func("ChangeFont").Bind("${mapping.signal}"))\n`;
    continue;
  }

  if (mapping.type === 'elevation') {
    script += `Hotstring(":?COXZ:${mapping.input}", Func("ChangeElevation").Bind("${mapping.signal}"))\n`;
    continue;
  }


  if (mapping.type === 'romanization') {
    script += `Hotstring(":*?B0COX:${mapping.input}", Func("TypeString").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length - 1}))\n`;
    continue;
  }

  if (mapping.type === 'symbol' || mapping.type === 'alphanumeral') {
    if (mapping.input.length === 1 || mapping.input === '  ') {
      script += `Hotstring(":*?B0COX:${mapping.input}", Func("${{ 'alphanumeral': 'TypeAlphanumeral', 'symbol': 'TypeString' }[mapping.type]}").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length - 1}))\n`;
      continue;
    } else {
      script += `Hotstring(":?B0COXZ:${mapping.input}", Func("${{ 'alphanumeral': 'TypeAlphanumeral', 'symbol': 'TypeString' }[mapping.type]}").Bind(${JSON.stringify(mapping.output)}, ${mapping.input.length}))\n`;
      continue;
    }
  }
}

script +=
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

Tab::Return
`;

fs.writeFileSync('output/MathType.ahk', '\uFEFF' + script);
if (process.argv[2] === 'compile') {
  exec(`.\\bin\\Ahk2Exe\\Ahk2Exe.exe /in output/MathType.ahk /out MathType.exe /icon ../assets/exe-icon.ico`);
  console.log('An exe has been generated. Make sure to deactivate other scripts before running the exe.');
} else {
  exec('start output/MathType.ahk');
  console.log('The AHK script is running.');
}
