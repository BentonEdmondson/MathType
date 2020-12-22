var { keywordSets } = require('./initialization/init');
var fs = require('fs');

console.log(keywordSets.general);

let ahkScript = `SendMode Input
#SingleInstance force
#NoEnv
#Warn
#Hotstring EndChars :
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
  return
`;

for (let keyword of keywordSets.general) {

  // TODO: get colon to ratio symbol conversion working:
  if (keyword.input === ':') {
    //ahkScript += `Hotstring(":?C*::", "${keyword.output}")\nreturn\n`;
    continue;
  };

  keyword.input.endsWith(':') ? ahkScript += `:?B0CO:${keyword.input.slice(0, -1)}::\n` : ahkScript += `:*?B0CO:${keyword.input}::\n`;
  if ([...keyword.follows].length - 1 > 0) ahkScript += `  Send, {bs ${[...keyword.follows].length - 1}}\n`;
  keyword.output === ' ' ? ahkScript += `  Send, {Space}\n` : ahkScript += `  SendRaw, ${keyword.output}\n`;
  ahkScript += `  return\n`;

}

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);