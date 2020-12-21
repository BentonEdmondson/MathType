var { keywordSets } = require('./initialization/init');
var fs = require('fs');

console.log(keywordSets.general);

let ahkScript = `SendMode Input
#SingleInstance force
#NoEnv
#Warn
#Hotstring EndChars :
~$BS::
~$Del::
~$Home::
~$End::
~$PgUp::
~$PgDn::
~$Left::
~$Right::
~$Enter::
~$LButton::
~$RButton::
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

  // TODO:
  // Make script activate with a hotkey
  // Allow alternate fonts
  // Allow alternate character elevations (sup, sub, etc.)
  // Fix AHK {Space}
  // Find all the best ahk header options that should be used
  // Make .follows only the characters it follows, not all the characters
  // If no other hotstring contains this one, this one should reset the recognizer (have the Z option)
  // - e.g. theta should reset the recognizer so thetau doesn't mess things up
  // - <= on the other hand shouldn't, because <=> is valid
  // - this will fix the never-ending problem where, e.g., xxxxxxxx just results in one multiplication sign
  // Give the script a custom tray icon https://autohotkey.com/board/topic/24515-how-to-change-the-tray-icon/?p=158699
  // - fully customize the tray menu
  // Make script as fast as possible using this: https://www.autohotkey.com/boards/viewtopic.php?p=77753#p77753
  // Make all file names kebab case
  // Add a good 30 or so test cases so that new additions can be tested (note that the algorithms are different, think about how "vvec" is handled).
  // - I think the easiest way to test will just be to type with NutJS or similar and see if the test cases match up
  // Check if e should be italicized, roman, a certain Unicode char, etc.
  // Add the enter key to the reset list
}

fs.writeFileSync(`script.ahk`, '\uFEFF' + ahkScript);