### TODO:
- Make script activate with a hotkey (I like the idea of `Ctrl`+`Win`+`Alt`+`Space`+`M`)
- Allow alternate fonts
- Allow alternate character elevations (sup, sub, etc.)
- Make `.follows` only the characters it follows, not all the characters needed for generation
  - In general, fix up the Node.js code
- If no other hotstring contains this one, this one should reset the recognizer (have the Z option)
  - e.g. theta should reset the recognizer so thetau doesn't mess things up
  - <= on the other hand shouldn't, because <=> is valid
  - this will fix much of the never-ending problems where, e.g., xxxxxxxx just results in one multiplication sign
- Give the script a custom tray icon https://autohotkey.com/board/topic/24515-how-to-change-the-tray-icon/?p=158699
  - Fully customize the tray menu
  - Make tray icon change color depending on whether script is activated or not
    - Make make its text match that of the current mode (superscripted, double-struck, etc.)
- Make script as fast as possible using this: https://www.autohotkey.com/boards/viewtopic.php?p=77753#p77753
- Add a good 30 or so test cases so that new additions can be tested
  - I think the easiest way to test will just be to type the test case with NutJS, `Shift`+`Home`, `Ctrl`+`C` and see if the test cases match up
- Check if e, pi should be italicized, roman, a certain Unicode char, etc.
- Make a nice-looking README with a gif, etc.