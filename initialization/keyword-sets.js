// TODO: add all of the Greek letters, not just AsciiMath's subset
// TODO: add `undefined` in spots where no such Unicode character exists
module.exports = {
  general: [
    { input: '+', output: '+' },
    { input: '-', output: '−' },
    { input: '*', output: '⋅' },
    { input: '**', output: '∗' },
    { input: '***', output: '⋆' },
    { input: '/', output: '∕' },
    { input: '\\', output: '∖' },
    { input: 'xx', output: '×' },
    { input: '-:', output: '÷' },
    { input: ':', output: '∶' },
    { input: '!', output: '!' },

    { input: '|><', output: '⋉' },
    { input: '><|', output: '⋊' },
    { input: '|><|', output: '⋈' },
    { input: 'o+', output: '⊕' },
    { input: 'ox', output: '⊗' },
    { input: 'o.', output: '⊙' },
    { input: 'sum', output: '∑' },
    { input: 'prod', output: '∏' },

    { input: '^^', output: '∧' },
    { input: '^^^', output: '⋀' },
    { input: 'vv', output: '∨' },
    { input: 'vvv', output: '⋁' },
    { input: 'nn', output: '∩' },
    { input: 'nnn', output: '⋂' },
    { input: 'uu', output: '∪' },
    { input: 'uuu', output: '⋃' },

    { input: 'sqrt', output: '√' },
    { input: 'root(3)', output: '∛' },
    { input: 'root(4)', output: '∜' },

    { input: 'int', output: '∫' },
    { input: 'iint', output: '∬' },
    { input: 'iiint', output: '∭' },
    { input: 'iiiint', output: '⨌' },
    { input: 'oint', output: '∮' },
    { input: 'oiint', output: '∯' },
    { input: 'oiiint', output: '∰' },

    { input: 'del', output: '∂' },
    { input: 'Del', output: '∆' },
    { input: 'grad', output: '∇' },
    { input: '+-', output: '±' },
    { input: '-+', output: '∓' },
    { input: 'O/', output: '∅' },
    { input: 'oo', output: '∞' },
    { input: 'aleph', output: 'ℵ' },

    { input: ':.', output: '∴' },
    { input: ':\'', output: '∵' },
    { input: '...', output: '…' },
    { input: 'cdots', output: '⋯' },
    { input: 'vdots', output: '⋮' },
    { input: 'ddots', output: '⋱' },

    { input: "'", output: '′' },
    { input: "''", output: '″' },
    { input: "'''", output: '‴' },
    { input: "''''", output: '⁗' },

    { input: ' ', output: '\u2006' },
    { input: '  ', output: '\u2004' },
    { input: '\\ ', output: '\u0020' },
    { input: 'quad', output: '\u2003' },

    { input: '/_', output: '∠' },
    { input: 'frown', output: '⏜' },
    { input: '/_\\', output: '△' },
    { input: 'diamond', output: '⋄' },
    { input: 'square', output: '□' },
    { input: '@', output: '∘' },

    { input: 'CC', output: 'ℂ' },
    { input: 'NN', output: 'ℕ' },
    { input: 'QQ', output: 'ℚ' },
    { input: 'RR', output: 'ℝ' },
    { input: 'ZZ', output: 'ℤ' },
    { input: 'AA', output: '∀' },
    { input: 'EE', output: '∃' },

    { input: '=', output: '=' },
    { input: ':=', output: '≔' },
    { input: '!=', output: '≠' },
    { input: '?=', output: '≟' },
    { input: 'Delta=', output: '≜' },
    { input: '-=', output: '≡' },
    { input: '~=', output: '≅' },
    { input: '~~', output: '≈' },
    { input: 'prop', output: '∝' },
    { input: '<', output: '<' },
    { input: '<<', output: '≪' },
    { input: '>', output: '>' },
    { input: '>>', output: '≫' },
    { input: '<=', output: '≤' },
    { input: '>=', output: '≥' },
    { input: '-<', output: '≺' },
    { input: '-<=', output: '≼' },
    { input: '>-', output: '≻' },
    { input: '>-=', output: '≽' },
    { input: 'in', output: '∈' },
    { input: '!in', output: '∉' },
    { input: 'sub', output: '⊂' },
    { input: 'sup', output: '⊃' },
    { input: 'sube', output: '⊆' },
    { input: 'supe', output: '⊇' },

    { input: 'and', output: 'and' },
    { input: 'or', output: 'or' },
    { input: 'not', output: '¬' },
    { input: 'if', output: 'if' },
    { input: '_|_', output: '⊥' },
    { input: 'TT', output: '⊤' },
    { input: '|--', output: '⊢' },
    { input: '|==', output: '⊨' },

    { input: '|_', output: '⌊' },
    { input: '_|', output: '⌋' },
    { input: '|~', output: '⌈' },
    { input: '~|', output: '⌉' },
    { input: '(', output: '(' },
    { input: ')', output: ')' },
    { input: '[', output: '[' },
    { input: ']', output: ']' },
    { input: '{', output: '{' },
    { input: '}', output: '}' },
    { input: '(:', output: '⟨' },
    { input: ':)', output: '⟩' },
    { input: '|', output: '|' },
    //{ input: '||', output: '‖' },

    { input: '<=>', output: '⇔' },
    { input: '=>', output: '⇒' },
    { input: 'lArr', output: '⇐' },
    { input: 'uarr', output: '↑' },
    { input: 'darr', output: '↓' },
    { input: '->', output: '→' },
    { input: '-->', output: '⟶' },
    { input: '>->', output: '↣' },
    { input: '->>', output: '↠' },
    { input: '>->>', output: '⤖' },
    { input: '|->', output: '↦' },
    { input: '<-', output: '←' },
    { input: '<--', output: '⟵' },
    { input: '<->', output: '↔' },

    { input: '(1/4)', output: '¼' },
    { input: '(1/2)', output: '½' },
    { input: '(3/4)', output: '¾' },
    { input: '(1/7)', output: '⅐' },
    { input: '(1/9)', output: '⅑' },
    { input: '(1/10)', output: '⅒' },
    { input: '(1/3)', output: '⅓' },
    { input: '(2/3)', output: '⅔' },
    { input: '(1/5)', output: '⅕' },
    { input: '(2/5)', output: '⅖' },
    { input: '(3/5)', output: '⅗' },
    { input: '(4/5)', output: '⅘' },
    { input: '(1/6)', output: '⅙' },
    { input: '(5/6)', output: '⅚' },
    { input: '(1/8)', output: '⅛' },
    { input: '(3/8)', output: '⅜' },
    { input: '(5/8)', output: '⅝' },
    { input: '(7/8)', output: '⅞' },

    { input: ' hat', output: '\u0302' },
    { input: ' bar', output: '\u0305' },
    { input: ' ul', output: '\u0332' },
    { input: ' vec', output: '\u20D7' },
    { input: ' dot', output: '\u0307' },
    { input: ' ddot', output: '\u0308' },
    { input: ' cancel', output: '\u0338' },

    // I'll just have to add these as they are needed
    // I'll need to take from a huge list; e.g. https://www.compart.com/en/unicode/category/Mn
    // and hard code each desired scenario; e.g. overset(~) → \u0303
    //{ input: 'overset(x)', output: '' },
    //{ input: 'underset(x)', output: '' },

    { input: 'sin', output: 'sin' },
    { input: 'cos', output: 'cos' },
    { input: 'tan', output: 'tan' },
    { input: 'sec', output: 'sec' },
    { input: 'csc', output: 'csc' },
    { input: 'cot', output: 'cot' },
    { input: 'arcsin', output: 'arcsin' },
    { input: 'arccos', output: 'arccos' },
    { input: 'arctan', output: 'arctan' },
    { input: 'sinh', output: 'sinh' },
    { input: 'cosh', output: 'cosh' },
    { input: 'tanh', output: 'tanh' },
    { input: 'sech', output: 'sech' },
    { input: 'csch', output: 'csch' },
    { input: 'coth', output: 'coth' },
    { input: 'exp', output: 'exp' },
    { input: 'log', output: 'log' },
    { input: 'ln', output: 'ln' },
    { input: 'mod', output: 'mod' },
    { input: 'lim', output: 'lim' },

    { input: 'a', output: '𝑎' },
    { input: 'b', output: '𝑏' },
    { input: 'c', output: '𝑐' },
    { input: 'd', output: '𝑑' },
    { input: 'e', output: '𝑒' },
    { input: 'f', output: '𝑓' },
    { input: 'g', output: '𝑔' },
    { input: 'h', output: 'ℎ' },
    { input: 'i', output: '𝑖' },
    { input: 'j', output: '𝑗' },
    { input: 'k', output: '𝑘' },
    { input: 'l', output: '𝑙' },
    { input: 'm', output: '𝑚' },
    { input: 'n', output: '𝑛' },
    { input: 'o', output: '𝑜' },
    { input: 'p', output: '𝑝' },
    { input: 'q', output: '𝑞' },
    { input: 'r', output: '𝑟' },
    { input: 's', output: '𝑠' },
    { input: 't', output: '𝑡' },
    { input: 'u', output: '𝑢' },
    { input: 'v', output: '𝑣' },
    { input: 'w', output: '𝑤' },
    { input: 'x', output: '𝑥' },
    { input: 'y', output: '𝑦' },
    { input: 'z', output: '𝑧' },
    { input: 'A', output: '𝐴' },
    { input: 'B', output: '𝐵' },
    { input: 'C', output: '𝐶' },
    { input: 'D', output: '𝐷' },
    { input: 'E', output: '𝐸' },
    { input: 'F', output: '𝐹' },
    { input: 'G', output: '𝐺' },
    { input: 'H', output: '𝐻' },
    { input: 'I', output: '𝐼' },
    { input: 'J', output: '𝐽' },
    { input: 'K', output: '𝐾' },
    { input: 'L', output: '𝐿' },
    { input: 'M', output: '𝑀' },
    { input: 'N', output: '𝑁' },
    { input: 'O', output: '𝑂' },
    { input: 'P', output: '𝑃' },
    { input: 'Q', output: '𝑄' },
    { input: 'R', output: '𝑅' },
    { input: 'S', output: '𝑆' },
    { input: 'T', output: '𝑇' },
    { input: 'U', output: '𝑈' },
    { input: 'V', output: '𝑉' },
    { input: 'W', output: '𝑊' },
    { input: 'X', output: '𝑋' },
    { input: 'Y', output: '𝑌' },
    { input: 'Z', output: '𝑍' },
    { input: '0', output: '0' },
    { input: '1', output: '1' },
    { input: '2', output: '2' },
    { input: '3', output: '3' },
    { input: '4', output: '4' },
    { input: '5', output: '5' },
    { input: '6', output: '6' },
    { input: '7', output: '7' },
    { input: '8', output: '8' },
    { input: '9', output: '9' },

    // https://tex.stackexchange.com/a/304576
    { input: 'Gamma', output: '𝛤' },
    { input: 'Delta', output: '𝛥' },
    { input: 'Theta', output: '𝛩' },
    { input: 'Lambda', output: '𝛬' },
    { input: 'Xi', output: '𝛯' },
    { input: 'Pi', output: '𝛱' },
    { input: 'Sigma', output: '𝛴' },
    { input: 'Phi', output: '𝛷' },
    { input: 'Psi', output: '𝛹' },
    { input: 'Omega', output: '𝛺' },
    { input: 'alpha', output: '𝛼' },
    { input: 'beta', output: '𝛽' },
    { input: 'gamma', output: '𝛾' },
    { input: 'delta', output: '𝛿' },
    { input: 'epsilon', output: '𝜖' },
    { input: 'varepsilon', output: '𝜀' },
    { input: 'zeta', output: '𝜁' },
    { input: 'eta', output: '𝜂' },
    { input: 'theta', output: '𝜃' },
    { input: 'vartheta', output: '𝜗' },
    { input: 'iota', output: '𝜄' },
    { input: 'kappa', output: '𝜅' },
    { input: 'lambda', output: '𝜆' },
    { input: 'mu', output: '𝜇' },
    { input: 'nu', output: '𝜈' },
    { input: 'xi', output: '𝜉' },
    { input: 'pi', output: '𝜋' },
    { input: 'rho', output: '𝜌' },
    { input: 'sigma', output: '𝜎' },
    { input: 'tau', output: '𝜏' },
    { input: 'upsilon', output: '𝜐' },
    { input: 'phi', output: '𝜙' },
    { input: 'varphi', output: '𝜑' },
    { input: 'chi', output: '𝜒' },
    { input: 'psi', output: '𝜓' },
    { input: 'omega', output: '𝜔' },
  ],
  // https://www.wikiwand.com/en/Unicode_subscripts_and_superscripts
  exponent: [
    { input: '0', output: '⁰' },
    { input: '1', output: '¹' },
    { input: '2', output: '²' },
    { input: '3', output: '³' },
    { input: '4', output: '⁴' },
    { input: '5', output: '⁵' },
    { input: '6', output: '⁶' },
    { input: '7', output: '⁷' },
    { input: '8', output: '⁸' },
    { input: '9', output: '⁹' },
    { input: '+', output: '⁺' },
    { input: '−', output: '⁻' },
    { input: '=', output: '⁼' },
    { input: '(', output: '⁽' },
    { input: ')', output: '⁾' },

    { input: 'a', output: 'ᵃ' },
    { input: 'b', output: 'ᵇ' },
    { input: 'c', output: 'ᶜ' },
    { input: 'd', output: 'ᵈ' },
    { input: 'e', output: 'ᵉ' },
    { input: 'f', output: 'ᶠ' },
    { input: 'g', output: 'ᵍ' },
    { input: 'h', output: 'ʰ' },
    { input: 'i', output: 'ⁱ' },
    { input: 'j', output: 'ʲ' },
    { input: 'k', output: 'ᵏ' },
    { input: 'l', output: 'ˡ' },
    { input: 'm', output: 'ᵐ' },
    { input: 'n', output: 'ⁿ' },
    { input: 'o', output: 'ᵒ' },
    { input: 'p', output: 'ᵖ' },
    { input: 'r', output: 'ʳ' },
    { input: 's', output: 'ˢ' },
    { input: 't', output: 'ᵗ' },
    { input: 'u', output: 'ᵘ' },
    { input: 'v', output: 'ᵛ' },
    { input: 'w', output: 'ʷ' },
    { input: 'x', output: 'ˣ' },
    { input: 'y', output: 'ʸ' },
    { input: 'z', output: 'ᶻ' },
    { input: 'A', output: 'ᴬ' },
    { input: 'B', output: 'ᴮ' },
    { input: 'D', output: 'ᴰ' },
    { input: 'E', output: 'ᴱ' },
    { input: 'G', output: 'ᴳ' },
    { input: 'H', output: 'ᴴ' },
    { input: 'I', output: 'ᴵ' },
    { input: 'J', output: 'ᴶ' },
    { input: 'K', output: 'ᴷ' },
    { input: 'L', output: 'ᴸ' },
    { input: 'M', output: 'ᴹ' },
    { input: 'N', output: 'ᴺ' },
    { input: 'O', output: 'ᴼ' },
    { input: 'P', output: 'ᴾ' },
    { input: 'R', output: 'ᴿ' },
    { input: 'T', output: 'ᵀ' },
    { input: 'U', output: 'ᵁ' },
    { input: 'V', output: 'ⱽ' },
    { input: 'W', output: 'ᵂ' },

    { input: '𝑎', output: 'ᵃ' },
    { input: '𝑏', output: 'ᵇ' },
    { input: '𝑐', output: 'ᶜ' },
    { input: '𝑑', output: 'ᵈ' },
    { input: '𝑒', output: 'ᵉ' },
    { input: '𝑓', output: 'ᶠ' },
    { input: '𝑔', output: 'ᵍ' },
    { input: 'ℎ', output: 'ʰ' },
    { input: '𝑖', output: 'ⁱ' },
    { input: '𝑗', output: 'ʲ' },
    { input: '𝑘', output: 'ᵏ' },
    { input: '𝑙', output: 'ˡ' },
    { input: '𝑚', output: 'ᵐ' },
    { input: '𝑛', output: 'ⁿ' },
    { input: '𝑜', output: 'ᵒ' },
    { input: '𝑝', output: 'ᵖ' },
    { input: '𝑟', output: 'ʳ' },
    { input: '𝑠', output: 'ˢ' },
    { input: '𝑡', output: 'ᵗ' },
    { input: '𝑢', output: 'ᵘ' },
    { input: '𝑣', output: 'ᵛ' },
    { input: '𝑤', output: 'ʷ' },
    { input: '𝑥', output: 'ˣ' },
    { input: '𝑦', output: 'ʸ' },
    { input: '𝑧', output: 'ᶻ' },
    { input: '𝐴', output: 'ᴬ' },
    { input: '𝐵', output: 'ᴮ' },
    { input: '𝐷', output: 'ᴰ' },
    { input: '𝐸', output: 'ᴱ' },
    { input: '𝐺', output: 'ᴳ' },
    { input: '𝐻', output: 'ᴴ' },
    { input: '𝐼', output: 'ᴵ' },
    { input: '𝐽', output: 'ᴶ' },
    { input: '𝐾', output: 'ᴷ' },
    { input: '𝐿', output: 'ᴸ' },
    { input: '𝑀', output: 'ᴹ' },
    { input: '𝑁', output: 'ᴺ' },
    { input: '𝑂', output: 'ᴼ' },
    { input: '𝑃', output: 'ᴾ' },
    { input: '𝑅', output: 'ᴿ' },
    { input: '𝑇', output: 'ᵀ' },
    { input: '𝑈', output: 'ᵁ' },
    { input: '𝑉', output: 'ⱽ' },
    { input: '𝑊', output: 'ᵂ' },

    { input: '𝛽', output: 'ᵝ' },
    { input: '𝛾', output: 'ᵞ' },
    { input: '𝛿', output: 'ᵟ' },
    { input: '𝜃', output: 'ᶿ' },
    { input: '𝜄', output: 'ᶥ' },
    // although in VSCode this shows up as psi, it really is phi
    { input: '𝜑', output: 'ᵠ' },
    { input: '𝜒', output: 'ᵡ' },

    { input: 'β', output: 'ᵝ' },
    { input: 'γ', output: 'ᵞ' },
    { input: 'δ', output: 'ᵟ' },
    { input: 'θ', output: 'ᶿ' },
    { input: 'ι', output: 'ᶥ' },
    // this is the correct Roman phi, VSCode has it backwards
    { input: 'φ', output: 'ᵠ' },
    { input: 'χ', output: 'ᵡ' },
  ],
  subscript: [
    { input: '0', output: '₀' },
    { input: '1', output: '₁' },
    { input: '2', output: '₂' },
    { input: '3', output: '₃' },
    { input: '4', output: '₄' },
    { input: '5', output: '₅' },
    { input: '6', output: '₆' },
    { input: '7', output: '₇' },
    { input: '8', output: '₈' },
    { input: '9', output: '₉' },
    { input: '+', output: '₊' },
    { input: '−', output: '₋' },
    { input: '=', output: '₌' },
    { input: '(', output: '₍' },
    { input: ')', output: '₎' },

    { input: 'a', output: 'ₐ' },
    { input: 'e', output: 'ₑ' },
    { input: 'h', output: 'ₕ' },
    { input: 'i', output: 'ᵢ' },
    { input: 'j', output: 'ⱼ' },
    { input: 'k', output: 'ₖ' },
    { input: 'l', output: 'ₗ' },
    { input: 'm', output: 'ₘ' },
    { input: 'n', output: 'ₙ' },
    { input: 'o', output: 'ₒ' },
    { input: 'p', output: 'ₚ' },
    { input: 'r', output: 'ᵣ' },
    { input: 's', output: 'ₛ' },
    { input: 't', output: 'ₜ' },
    { input: 'u', output: 'ᵤ' },
    { input: 'v', output: 'ᵥ' },
    { input: 'x', output: 'ₓ' },

    { input: '𝑎', output: 'ₐ' },
    { input: '𝑒', output: 'ₑ' },
    { input: 'ℎ', output: 'ₕ' },
    { input: '𝑖', output: 'ᵢ' },
    { input: '𝑗', output: 'ⱼ' },
    { input: '𝑘', output: 'ₖ' },
    { input: '𝑙', output: 'ₗ' },
    { input: '𝑚', output: 'ₘ' },
    { input: '𝑛', output: 'ₙ' },
    { input: '𝑜', output: 'ₒ' },
    { input: '𝑝', output: 'ₚ' },
    { input: '𝑟', output: 'ᵣ' },
    { input: '𝑠', output: 'ₛ' },
    { input: '𝑡', output: 'ₜ' },
    { input: '𝑢', output: 'ᵤ' },
    { input: '𝑣', output: 'ᵥ' },
    { input: '𝑥', output: 'ₓ' },

    { input: '𝛽', output: 'ᵦ' },
    { input: '𝛾', output: 'ᵧ' },
    { input: 'ρ', output: 'ᵨ' },
    // although in VSCode this shows up as psi, it really is phi
    { input: '𝜑', output: 'ᵩ' },
    { input: '𝜒', output: 'ᵪ' },

    { input: 'β', output: 'ᵦ' },
    { input: 'γ', output: 'ᵧ' },
    { input: 'ι', output: 'ᶥ' },
    { input: '𝜌', output: 'ᵨ' },
    // this is the correct Roman phi, VSCode has it backwards
    { input: 'φ', output: 'ᵩ' },
    { input: 'χ', output: 'ᵪ' },
  ],
  bold: [
    { input: 'a', output: '𝗮' },
    { input: 'b', output: '𝗯' },
    { input: 'c', output: '𝗰' },
    { input: 'd', output: '𝗱' },
    { input: 'e', output: '𝗲' },
    { input: 'f', output: '𝗳' },
    { input: 'g', output: '𝗴' },
    { input: 'h', output: '𝗵' },
    { input: 'i', output: '𝗶' },
    { input: 'j', output: '𝗷' },
    { input: 'k', output: '𝗸' },
    { input: 'l', output: '𝗹' },
    { input: 'm', output: '𝗺' },
    { input: 'n', output: '𝗻' },
    { input: 'o', output: '𝗼' },
    { input: 'p', output: '𝗽' },
    { input: 'q', output: '𝗾' },
    { input: 'r', output: '𝗿' },
    { input: 's', output: '𝘀' },
    { input: 't', output: '𝘁' },
    { input: 'u', output: '𝘂' },
    { input: 'v', output: '𝘃' },
    { input: 'w', output: '𝘄' },
    { input: 'x', output: '𝘅' },
    { input: 'y', output: '𝘆' },
    { input: 'z', output: '𝘇' },
    { input: 'A', output: '𝗔' },
    { input: 'B', output: '𝗕' },
    { input: 'C', output: '𝗖' },
    { input: 'D', output: '𝗗' },
    { input: 'E', output: '𝗘' },
    { input: 'F', output: '𝗙' },
    { input: 'G', output: '𝗚' },
    { input: 'H', output: '𝗛' },
    { input: 'I', output: '𝗜' },
    { input: 'J', output: '𝗝' },
    { input: 'K', output: '𝗞' },
    { input: 'L', output: '𝗟' },
    { input: 'M', output: '𝗠' },
    { input: 'N', output: '𝗡' },
    { input: 'O', output: '𝗢' },
    { input: 'P', output: '𝗣' },
    { input: 'Q', output: '𝗤' },
    { input: 'R', output: '𝗥' },
    { input: 'S', output: '𝗦' },
    { input: 'T', output: '𝗧' },
    { input: 'U', output: '𝗨' },
    { input: 'V', output: '𝗩' },
    { input: 'W', output: '𝗪' },
    { input: 'X', output: '𝗫' },
    { input: 'Y', output: '𝗬' },
    { input: 'Z', output: '𝗭' },
    { input: '0', output: '𝟎' },
    { input: '1', output: '𝟏' },
    { input: '2', output: '𝟐' },
    { input: '3', output: '𝟑' },
    { input: '4', output: '𝟒' },
    { input: '5', output: '𝟓' },
    { input: '6', output: '𝟔' },
    { input: '7', output: '𝟕' },
    { input: '8', output: '𝟖' },
    { input: '9', output: '𝟗' },

    { input: 'Gamma', output: '𝚪' },
    { input: 'Delta', output: '𝚫' },
    { input: 'Theta', output: '𝚯' },
    { input: 'Lambda', output: '𝚲' },
    { input: 'Xi', output: '𝚵' },
    { input: 'Pi', output: '𝚷' },
    { input: 'Sigma', output: '𝚺' },
    { input: 'Phi', output: '𝚽' },
    { input: 'Psi', output: '𝚿' },
    { input: 'Omega', output: '𝛀' },
    { input: 'alpha', output: '𝛂' },
    { input: 'beta', output: '𝛃' },
    { input: 'gamma', output: '𝛄' },
    { input: 'delta', output: '𝛅' },
    { input: 'epsilon', output: '𝛜' },
    { input: 'varepsilon', output: '𝛆' },
    { input: 'zeta', output: '𝛇' },
    { input: 'eta', output: '𝛈' },
    { input: 'theta', output: '𝛉' },
    { input: 'vartheta', output: '𝛝' },
    { input: 'iota', output: '𝛊' },
    { input: 'kappa', output: '𝛋' },
    { input: 'lambda', output: '𝛌' },
    { input: 'mu', output: '𝛍' },
    { input: 'nu', output: '𝛎' },
    { input: 'xi', output: '𝛏' },
    { input: 'pi', output: '𝛑' },
    { input: 'rho', output: '𝛒' },
    { input: 'sigma', output: '𝛔' },
    { input: 'tau', output: '𝛕' },
    { input: 'upsilon', output: '𝛖' },
    { input: 'phi', output: '𝛟' },
    { input: 'varphi', output: '𝛗' },
    { input: 'chi', output: '𝛘' },
    { input: 'psi', output: '𝛙' },
    { input: 'omega', output: '𝛚' },
  ],
  doubleStruck: [
    { input: 'a', output: '𝕒' },
    { input: 'b', output: '𝕓' },
    { input: 'c', output: '𝕔' },
    { input: 'd', output: '𝕕' },
    { input: 'e', output: '𝕖' },
    { input: 'f', output: '𝕗' },
    { input: 'g', output: '𝕘' },
    { input: 'h', output: '𝕙' },
    { input: 'i', output: '𝕚' },
    { input: 'j', output: '𝕛' },
    { input: 'k', output: '𝕜' },
    { input: 'l', output: '𝕝' },
    { input: 'm', output: '𝕞' },
    { input: 'n', output: '𝕟' },
    { input: 'o', output: '𝕠' },
    { input: 'p', output: '𝕡' },
    { input: 'q', output: '𝕢' },
    { input: 'r', output: '𝕣' },
    { input: 's', output: '𝕤' },
    { input: 't', output: '𝕥' },
    { input: 'u', output: '𝕦' },
    { input: 'v', output: '𝕧' },
    { input: 'w', output: '𝕨' },
    { input: 'x', output: '𝕩' },
    { input: 'y', output: '𝕪' },
    { input: 'z', output: '𝕫' },
    { input: 'A', output: '𝔸' },
    { input: 'B', output: '𝔹' },
    { input: 'C', output: 'ℂ' },
    { input: 'D', output: '𝔻' },
    { input: 'E', output: '𝔼' },
    { input: 'F', output: '𝔽' },
    { input: 'G', output: '𝔾' },
    { input: 'H', output: 'ℍ' },
    { input: 'I', output: '𝕀' },
    { input: 'J', output: '𝕁' },
    { input: 'K', output: '𝕂' },
    { input: 'L', output: '𝕃' },
    { input: 'M', output: '𝕄' },
    { input: 'N', output: 'ℕ' },
    { input: 'O', output: '𝕆' },
    { input: 'P', output: 'ℙ' },
    { input: 'Q', output: 'ℚ' },
    { input: 'R', output: 'ℝ' },
    { input: 'S', output: '𝕊' },
    { input: 'T', output: '𝕋' },
    { input: 'U', output: '𝕌' },
    { input: 'V', output: '𝕍' },
    { input: 'W', output: '𝕎' },
    { input: 'X', output: '𝕏' },
    { input: 'Y', output: '𝕐' },
    { input: 'Z', output: 'ℤ' },
    { input: '0', output: '𝟘' },
    { input: '1', output: '𝟙' },
    { input: '2', output: '𝟚' },
    { input: '3', output: '𝟛' },
    { input: '4', output: '𝟜' },
    { input: '5', output: '𝟝' },
    { input: '6', output: '𝟞' },
    { input: '7', output: '𝟟' },
    { input: '8', output: '𝟠' },
    { input: '9', output: '𝟡' },
  ],
  script: [
    { input: 'a', output: '𝒶' },
    { input: 'b', output: '𝒷' },
    { input: 'c', output: '𝒸' },
    { input: 'd', output: '𝒹' },
    { input: 'e', output: 'ℯ' },
    { input: 'f', output: '𝒻' },
    { input: 'g', output: 'ℊ' },
    { input: 'h', output: '𝒽' },
    { input: 'i', output: '𝒾' },
    { input: 'j', output: '𝒿' },
    { input: 'k', output: '𝓀' },
    { input: 'l', output: '𝓁' },
    { input: 'm', output: '𝓂' },
    { input: 'n', output: '𝓃' },
    { input: 'o', output: 'ℴ' },
    { input: 'p', output: '𝓅' },
    { input: 'q', output: '𝓆' },
    { input: 'r', output: '𝓇' },
    { input: 's', output: '𝓈' },
    { input: 't', output: '𝓉' },
    { input: 'u', output: '𝓊' },
    { input: 'v', output: '𝓋' },
    { input: 'w', output: '𝓌' },
    { input: 'x', output: '𝓍' },
    { input: 'y', output: '𝓎' },
    { input: 'z', output: '𝓏' },
    { input: 'A', output: '𝒜' },
    { input: 'B', output: 'ℬ' },
    { input: 'C', output: '𝒞' },
    { input: 'D', output: '𝒟' },
    { input: 'E', output: 'ℰ' },
    { input: 'F', output: 'ℱ' },
    { input: 'G', output: '𝒢' },
    { input: 'H', output: 'ℋ' },
    { input: 'I', output: 'ℐ' },
    { input: 'J', output: '𝒥' },
    { input: 'K', output: '𝒦' },
    { input: 'L', output: 'ℒ' },
    { input: 'M', output: 'ℳ' },
    { input: 'N', output: '𝒩' },
    { input: 'O', output: '𝒪' },
    { input: 'P', output: '𝒫' },
    { input: 'Q', output: '𝒬' },
    { input: 'R', output: 'ℛ' },
    { input: 'S', output: '𝒮' },
    { input: 'T', output: '𝒯' },
    { input: 'U', output: '𝒰' },
    { input: 'V', output: '𝒱' },
    { input: 'W', output: '𝒲' },
    { input: 'X', output: '𝒳' },
    { input: 'Y', output: '𝒴' },
    { input: 'Z', output: '𝒵' },
  ],
  monospace: [
    { input: 'a', output: '𝚊' },
    { input: 'b', output: '𝚋' },
    { input: 'c', output: '𝚌' },
    { input: 'd', output: '𝚍' },
    { input: 'e', output: '𝚎' },
    { input: 'f', output: '𝚏' },
    { input: 'g', output: '𝚐' },
    { input: 'h', output: '𝚑' },
    { input: 'i', output: '𝚒' },
    { input: 'j', output: '𝚓' },
    { input: 'k', output: '𝚔' },
    { input: 'l', output: '𝚕' },
    { input: 'm', output: '𝚖' },
    { input: 'n', output: '𝚗' },
    { input: 'o', output: '𝚘' },
    { input: 'p', output: '𝚙' },
    { input: 'q', output: '𝚚' },
    { input: 'r', output: '𝚛' },
    { input: 's', output: '𝚜' },
    { input: 't', output: '𝚝' },
    { input: 'u', output: '𝚞' },
    { input: 'v', output: '𝚟' },
    { input: 'w', output: '𝚠' },
    { input: 'x', output: '𝚡' },
    { input: 'y', output: '𝚢' },
    { input: 'z', output: '𝚣' },
    { input: 'A', output: '𝙰' },
    { input: 'B', output: '𝙱' },
    { input: 'C', output: '𝙲' },
    { input: 'D', output: '𝙳' },
    { input: 'E', output: '𝙴' },
    { input: 'F', output: '𝙵' },
    { input: 'G', output: '𝙶' },
    { input: 'H', output: '𝙷' },
    { input: 'I', output: '𝙸' },
    { input: 'J', output: '𝙹' },
    { input: 'K', output: '𝙺' },
    { input: 'L', output: '𝙻' },
    { input: 'M', output: '𝙼' },
    { input: 'N', output: '𝙽' },
    { input: 'O', output: '𝙾' },
    { input: 'P', output: '𝙿' },
    { input: 'Q', output: '𝚀' },
    { input: 'R', output: '𝚁' },
    { input: 'S', output: '𝚂' },
    { input: 'T', output: '𝚃' },
    { input: 'U', output: '𝚄' },
    { input: 'V', output: '𝚅' },
    { input: 'W', output: '𝚆' },
    { input: 'X', output: '𝚇' },
    { input: 'Y', output: '𝚈' },
    { input: 'Z', output: '𝚉' },
    { input: '0', output: '𝟶' },
    { input: '1', output: '𝟷' },
    { input: '2', output: '𝟸' },
    { input: '3', output: '𝟹' },
    { input: '4', output: '𝟺' },
    { input: '5', output: '𝟻' },
    { input: '6', output: '𝟼' },
    { input: '7', output: '𝟽' },
    { input: '8', output: '𝟾' },
    { input: '9', output: '𝟿' },
  ],
  fraktur: [
    { input: 'a', output: '𝔞' },
    { input: 'b', output: '𝔟' },
    { input: 'c', output: '𝔠' },
    { input: 'd', output: '𝔡' },
    { input: 'e', output: '𝔢' },
    { input: 'f', output: '𝔣' },
    { input: 'g', output: '𝔤' },
    { input: 'h', output: '𝔥' },
    { input: 'i', output: '𝔦' },
    { input: 'j', output: '𝔧' },
    { input: 'k', output: '𝔨' },
    { input: 'l', output: '𝔩' },
    { input: 'm', output: '𝔪' },
    { input: 'n', output: '𝔫' },
    { input: 'o', output: '𝔬' },
    { input: 'p', output: '𝔭' },
    { input: 'q', output: '𝔮' },
    { input: 'r', output: '𝔯' },
    { input: 's', output: '𝔰' },
    { input: 't', output: '𝔱' },
    { input: 'u', output: '𝔲' },
    { input: 'v', output: '𝔳' },
    { input: 'w', output: '𝔴' },
    { input: 'x', output: '𝔵' },
    { input: 'y', output: '𝔶' },
    { input: 'z', output: '𝔷' },
    { input: 'A', output: '𝔄' },
    { input: 'B', output: '𝔅' },
    { input: 'C', output: 'ℭ' },
    { input: 'D', output: '𝔇' },
    { input: 'E', output: '𝔈' },
    { input: 'F', output: '𝔉' },
    { input: 'G', output: '𝔊' },
    { input: 'H', output: 'ℌ' },
    { input: 'I', output: 'ℑ' },
    { input: 'J', output: '𝔍' },
    { input: 'K', output: '𝔎' },
    { input: 'L', output: '𝔏' },
    { input: 'M', output: '𝔐' },
    { input: 'N', output: '𝔑' },
    { input: 'O', output: '𝔒' },
    { input: 'P', output: '𝔓' },
    { input: 'Q', output: '𝔔' },
    { input: 'R', output: 'ℜ' },
    { input: 'S', output: '𝔖' },
    { input: 'T', output: '𝔗' },
    { input: 'U', output: '𝔘' },
    { input: 'V', output: '𝔙' },
    { input: 'W', output: '𝔚' },
    { input: 'X', output: '𝔛' },
    { input: 'Y', output: '𝔜' },
    { input: 'Z', output: 'ℨ' },
  ],
  sanSerif: [
    { input: 'a', output: '𝖺' },
    { input: 'b', output: '𝖻' },
    { input: 'c', output: '𝖼' },
    { input: 'd', output: '𝖽' },
    { input: 'e', output: '𝖾' },
    { input: 'f', output: '𝖿' },
    { input: 'g', output: '𝗀' },
    { input: 'h', output: '𝗁' },
    { input: 'i', output: '𝗂' },
    { input: 'j', output: '𝗃' },
    { input: 'k', output: '𝗄' },
    { input: 'l', output: '𝗅' },
    { input: 'm', output: '𝗆' },
    { input: 'n', output: '𝗇' },
    { input: 'o', output: '𝗈' },
    { input: 'p', output: '𝗉' },
    { input: 'q', output: '𝗊' },
    { input: 'r', output: '𝗋' },
    { input: 's', output: '𝗌' },
    { input: 't', output: '𝗍' },
    { input: 'u', output: '𝗎' },
    { input: 'v', output: '𝗏' },
    { input: 'w', output: '𝗐' },
    { input: 'x', output: '𝗑' },
    { input: 'y', output: '𝗒' },
    { input: 'z', output: '𝗓' },
    { input: 'A', output: '𝖠' },
    { input: 'B', output: '𝖡' },
    { input: 'C', output: '𝖢' },
    { input: 'D', output: '𝖣' },
    { input: 'E', output: '𝖤' },
    { input: 'F', output: '𝖥' },
    { input: 'G', output: '𝖦' },
    { input: 'H', output: '𝖧' },
    { input: 'I', output: '𝖨' },
    { input: 'J', output: '𝖩' },
    { input: 'K', output: '𝖪' },
    { input: 'L', output: '𝖫' },
    { input: 'M', output: '𝖬' },
    { input: 'N', output: '𝖭' },
    { input: 'O', output: '𝖮' },
    { input: 'P', output: '𝖯' },
    { input: 'Q', output: '𝖰' },
    { input: 'R', output: '𝖱' },
    { input: 'S', output: '𝖲' },
    { input: 'T', output: '𝖳' },
    { input: 'U', output: '𝖴' },
    { input: 'V', output: '𝖵' },
    { input: 'W', output: '𝖶' },
    { input: 'X', output: '𝖷' },
    { input: 'Y', output: '𝖸' },
    { input: 'Z', output: '𝖹' },
    { input: '0', output: '𝟢' },
    { input: '1', output: '𝟣' },
    { input: '2', output: '𝟤' },
    { input: '3', output: '𝟥' },
    { input: '4', output: '𝟦' },
    { input: '5', output: '𝟧' },
    { input: '6', output: '𝟨' },
    { input: '7', output: '𝟩' },
    { input: '8', output: '𝟪' },
    { input: '9', output: '𝟫' },
  ],
  roman: [
    { input: 'a', output: 'a' },
    { input: 'b', output: 'b' },
    { input: 'c', output: 'c' },
    { input: 'd', output: 'd' },
    { input: 'e', output: 'e' },
    { input: 'f', output: 'f' },
    { input: 'g', output: 'g' },
    { input: 'h', output: 'h' },
    { input: 'i', output: 'i' },
    { input: 'j', output: 'j' },
    { input: 'k', output: 'k' },
    { input: 'l', output: 'l' },
    { input: 'm', output: 'm' },
    { input: 'n', output: 'n' },
    { input: 'o', output: 'o' },
    { input: 'p', output: 'p' },
    { input: 'q', output: 'q' },
    { input: 'r', output: 'r' },
    { input: 's', output: 's' },
    { input: 't', output: 't' },
    { input: 'u', output: 'u' },
    { input: 'v', output: 'v' },
    { input: 'w', output: 'w' },
    { input: 'x', output: 'x' },
    { input: 'y', output: 'y' },
    { input: 'z', output: 'z' },
    { input: 'A', output: 'A' },
    { input: 'B', output: 'B' },
    { input: 'C', output: 'C' },
    { input: 'D', output: 'D' },
    { input: 'E', output: 'E' },
    { input: 'F', output: 'F' },
    { input: 'G', output: 'G' },
    { input: 'H', output: 'H' },
    { input: 'I', output: 'I' },
    { input: 'J', output: 'J' },
    { input: 'K', output: 'K' },
    { input: 'L', output: 'L' },
    { input: 'M', output: 'M' },
    { input: 'N', output: 'N' },
    { input: 'O', output: 'O' },
    { input: 'P', output: 'P' },
    { input: 'Q', output: 'Q' },
    { input: 'R', output: 'R' },
    { input: 'S', output: 'S' },
    { input: 'T', output: 'T' },
    { input: 'U', output: 'U' },
    { input: 'V', output: 'V' },
    { input: 'W', output: 'W' },
    { input: 'X', output: 'X' },
    { input: 'Y', output: 'Y' },
    { input: 'Z', output: 'Z' },
    { input: '0', output: '0' },
    { input: '1', output: '1' },
    { input: '2', output: '2' },
    { input: '3', output: '3' },
    { input: '4', output: '4' },
    { input: '5', output: '5' },
    { input: '6', output: '6' },
    { input: '7', output: '7' },
    { input: '8', output: '8' },
    { input: '9', output: '9' },

    { input: 'Gamma', output: 'Γ' },
    { input: 'Delta', output: 'Δ' },
    { input: 'Theta', output: 'Θ' },
    { input: 'Lambda', output: 'Λ' },
    { input: 'Xi', output: 'Ξ' },
    { input: 'Pi', output: 'Π' },
    { input: 'Sigma', output: 'Σ' },
    { input: 'Phi', output: 'Φ' },
    { input: 'Psi', output: 'Ψ' },
    { input: 'Omega', output: 'Ω' },
    { input: 'alpha', output: 'α' },
    { input: 'beta', output: 'β' },
    { input: 'gamma', output: 'γ' },
    { input: 'delta', output: 'δ' },
    { input: 'epsilon', output: 'ϵ' },
    { input: 'varepsilon', output: 'ε' },
    { input: 'zeta', output: 'ζ' },
    { input: 'eta', output: 'η' },
    { input: 'theta', output: 'θ' },
    { input: 'vartheta', output: 'ϑ' },
    { input: 'iota', output: 'ι' },
    { input: 'kappa', output: 'κ' },
    { input: 'lambda', output: 'λ' },
    { input: 'mu', output: 'μ' },
    { input: 'nu', output: 'ν' },
    { input: 'xi', output: 'ξ' },
    { input: 'pi', output: 'π' },
    { input: 'rho', output: 'ρ' },
    { input: 'sigma', output: 'σ' },
    { input: 'tau', output: 'τ' },
    { input: 'upsilon', output: 'υ' },
    // in VSCode's font, annoyingly, varphi and phi are displayed vice versa, but this order is correct
    { input: 'phi', output: 'ϕ' },
    { input: 'varphi', output: 'φ' },
    { input: 'chi', output: 'χ' },
    { input: 'psi', output: 'ψ' },
    { input: 'omega', output: 'ω' },
  ],
  signalPhrases: [
    { input: 'bb "', signal: 'bold' },
    { input: 'bbb "', signal: 'doubleStruck' },
    { input: 'cc "', signal: 'script' },
    { input: 'tt "', signal: 'monospace' },
    { input: 'fr "', signal: 'fraktur' },
    { input: 'sf "', signal: 'sansSerif' },
    { input: '"', signal: 'romanOrClosingQuote' },
    { input: '^', signal: 'exponent' },
    { input: '_', signal: 'subscript' },
  ],
};