import "./keyboard.css";

function Keyboard() {
    
    return (
        <div className="keyboardCasing rounded-lg shadow-lg p-6">
            <div className="keyboard-container bg-[var(--card-background)] rounded-lg p-6">
                <div className="function-key">
                    <div className="singlekey">
                        <div className="key escape-key" id="escape"><div className="keycap escape-key"><span className="bottom">Esc</span></div></div>
                    </div>
                    <div className="key-cluster">
                        <div className="key function-row functions-key" id="f1"><div className="keycap functions-key"><span className="bottom">F1</span></div></div>
                        <div className="key function-row functions-key" id="f2"><div className="keycap functions-key"><span className="bottom">F2</span></div></div>
                        <div className="key function-row functions-key" id="f3"><div className="keycap functions-key"><span className="bottom">F3</span></div></div>
                        <div className="key function-row functions-key" id="f4"><div className="keycap functions-key"><span className="bottom">F4</span></div></div>
                    </div>
                    <div className="key-cluster">
                        <div className="key function-row functions-key" id="f5"><div className="keycap functions-key"><span className="bottom">F5</span></div></div>
                        <div className="key function-row functions-key" id="f6"><div className="keycap functions-key"><span className="bottom">F6</span></div></div>
                        <div className="key function-row functions-key" id="f7"><div className="keycap functions-key"><span className="bottom">F7</span></div></div>
                        <div className="key function-row functions-key" id="f8"><div className="keycap functions-key"><span className="bottom">F8</span></div></div>
                    </div>
                    <div className="key-cluster">
                        <div className="key function-row functions-key" id="f9"><div className="keycap functions-key"><span className="bottom">F9</span></div></div>
                        <div className="key function-row functions-key" id="f10"><div className="keycap functions-key"><span className="bottom">F10</span></div></div>
                        <div className="key function-row functions-key" id="f11"><div className="keycap functions-key"><span className="bottom">F11</span></div></div>
                        <div className="key function-row functions-key" id="f12"><div className="keycap functions-key"><span className="bottom">F12</span></div></div>
                    </div>
                    <div className="singlekey">
                        <div className="key" id="delete"><div className="keycap"><span className="bottom">Del</span></div></div>
                    </div>
                </div>
                <div className="numpad-Top-row">
                    <div className="key" id="insert"><div className="keycap"><span className="bottom">Ins</span></div></div>
                    <div className="key" id="pageup"><div className="keycap"><span className="bottom PgBtn">PgUp</span></div></div>
                    <div className="key" id="pagedown"><div className="keycap"><span className="bottom PgBtn">PgDn</span></div></div>
                    <div className="roundkeybase">
                        <div className="roundkey round-knob"><div className="roundkeycap round-knob"><span>⚙</span></div></div>
                    </div>
                </div>
                <div className="keyboard-row">
                    <div className="Number-row">
                        <div className="key" id="backquote"><div className="keycap"><span className="top">~</span><span className="bottom">`</span></div></div>
                        <div className="key" id="digit1"><div className="keycap"><span className="top">!</span><span className="bottom">1</span></div></div>
                        <div className="key" id="digit2"><div className="keycap"><span className="top">@</span><span className="bottom">2</span></div></div>
                        <div className="key" id="digit3"><div className="keycap"><span className="top">#</span><span className="bottom">3</span></div></div>
                        <div className="key" id="digit4"><div className="keycap"><span className="top">$</span><span className="bottom">4</span></div></div>
                        <div className="key" id="digit5"><div className="keycap"><span className="top">%</span><span className="bottom">5</span></div></div>
                        <div className="key" id="digit6"><div className="keycap"><span className="top">^</span><span className="bottom">6</span></div></div>
                        <div className="key" id="digit7"><div className="keycap"><span className="top">&</span><span className="bottom">7</span></div></div>
                        <div className="key" id="digit8"><div className="keycap"><span className="top">*</span><span className="bottom">8</span></div></div>
                        <div className="key" id="digit9"><div className="keycap"><span className="top">(</span><span className="bottom">9</span></div></div>
                        <div className="key" id="digit0"><div className="keycap"><span className="top">)</span><span className="bottom">0</span></div></div>
                        <div className="key" id="minus"><div className="keycap"><span className="top">_</span><span className="bottom">-</span></div></div>
                        <div className="key" id="equal"><div className="keycap"><span className="top">+</span><span className="bottom">=</span></div></div>
                        <div className="key key-backspace modifier-key" id="backspace"><div className="keycap modifier-key"><span className="bottom">Backspace</span></div></div>
                    </div>
                    <div className="qwerty-first">
                        <div className="key key-wide" id="tab"><div className="keycap"><span className="bottom">Tab</span></div></div>
                        <div className="key" id="keyq"><div className="keycap"><span className="bottom">Q</span></div></div>
                        <div className="key wasd-key" id="keyw"><div className="keycap wasd-key"><span className="bottom">W</span></div></div>
                        <div className="key" id="keye"><div className="keycap"><span className="bottom">E</span></div></div>
                        <div className="key" id="keyr"><div className="keycap"><span className="bottom">R</span></div></div>
                        <div className="key" id="keyt"><div className="keycap"><span className="bottom">T</span></div></div>
                        <div className="key" id="keyy"><div className="keycap"><span className="bottom">Y</span></div></div>
                        <div className="key" id="keyu"><div className="keycap"><span className="bottom">U</span></div></div>
                        <div className="key" id="keyi"><div className="keycap"><span className="bottom">I</span></div></div>
                        <div className="key" id="keyo"><div className="keycap"><span className="bottom">O</span></div></div>
                        <div className="key" id="keyp"><div className="keycap"><span className="bottom">P</span></div></div>
                        <div className="key" id="bracketleft"><div className="keycap"><span className="top">{'{'}</span><span className="bottom">[</span></div></div>
                        <div className="key" id="bracketright"><div className="keycap"><span className="top">{'}'}</span><span className="bottom">]</span></div></div>
                        <div className="key key-wide" id="backslash"><div className="keycap"><span className="top">|</span><span className="bottom">\</span></div></div>
                    </div>
                    <div className="qwerty-second">
                        <div className="key key-caps" id="capslock"><div className="keycap"><span className="bottom">Caps Lock</span></div></div>
                        <div className="key wasd-key" id="keya"><div className="keycap wasd-key"><span className="bottom">A</span></div></div>
                        <div className="key wasd-key" id="keys"><div className="keycap wasd-key"><span className="bottom">S</span></div></div>
                        <div className="key wasd-key" id="keyd"><div className="keycap wasd-key"><span className="bottom">D</span></div></div>
                        <div className="key" id="keyf"><div className="keycap"><span className="bottom">F</span></div></div>
                        <div className="key" id="keyg"><div className="keycap"><span className="bottom">G</span></div></div>
                        <div className="key" id="keyh"><div className="keycap"><span className="bottom">H</span></div></div>
                        <div className="key" id="keyj"><div className="keycap"><span className="bottom">J</span></div></div>
                        <div className="key" id="keyk"><div className="keycap"><span className="bottom">K</span></div></div>
                        <div className="key" id="keyl"><div className="keycap"><span className="bottom">L</span></div></div>
                        <div className="key" id="semicolon"><div className="keycap"><span className="top">:</span><span className="bottom">;</span></div></div>
                        <div className="key" id="quote"><div className="keycap"><span className="top">"</span><span className="bottom">'</span></div></div>
                        <div className="key key-enter wasd-key" id="enter"><div className="keycap wasd-key"><span className="bottom">Enter</span></div></div>
                    </div>
                    <div className="qwerty-third">
                        <div className="qwerty-third-left">
                            <div className="key key-shift-Left modifier-key" id="shiftleft"><div className="keycap modifier-key"><span className="bottom">Shift</span></div></div>
                            <div className="key" id="keyz"><div className="keycap"><span className="bottom">Z</span></div></div>
                            <div className="key" id="keyx"><div className="keycap"><span className="bottom">X</span></div></div>
                            <div className="key" id="keyc"><div className="keycap"><span className="bottom">C</span></div></div>
                            <div className="key" id="keyv"><div className="keycap"><span className="bottom">V</span></div></div>
                            <div className="key" id="keyb"><div className="keycap"><span className="bottom">B</span></div></div>
                            <div className="key" id="keyn"><div className="keycap"><span className="bottom">N</span></div></div>
                            <div className="key" id="keym"><div className="keycap"><span className="bottom">M</span></div></div>
                            <div className="key" id="comma"><div className="keycap"><span className="top">&lt;</span><span className="bottom">,</span></div></div>
                            <div className="key" id="period"><div className="keycap"><span className="top">&gt;</span><span className="bottom">.</span></div></div>
                            <div className="key" id="slash"><div className="keycap"><span className="top">?</span><span className="bottom">/</span></div></div>
                            <div className="key key-shift-Right modifier-key" id="shiftright"><div className="keycap modifier-key"><span className="bottom">Shift</span></div></div>
                        </div>
                        <div className="qwerty-third-right">
                            <div className="key arrow-key" id="arrowup"><div className="keycap arrow-key"><span className="bottom">↑</span></div></div>
                        </div>
                    </div>
                    <div className="qwerty-bottom">
                        <div className="qwerty-bottom-left">
                            <div className="key key-ctrl modifier-key" id="controlleft"><div className="keycap modifier-key"><span className="bottom">Ctrl</span></div></div>
                            <div className="key key-ctrl" id="metaleft"><div className="keycap"><span className="bottom">⊞</span></div></div>
                            <div className="key key-alt modifier-key" id="altleft"><div className="keycap modifier-key"><span className="bottom">Alt</span></div></div>
                            <div className="key key-space" id="space"><div className="keycap"></div></div>
                            <div className="key modifier-key" id="altright"><div className="keycap modifier-key"><span className="bottom">Alt</span></div></div>
                            <div className="key"><div className="keycap"><span className="bottom">Fn</span></div></div>
                            <div className="key modifier-key" id="controlright"><div className="keycap modifier-key"><span className="bottom">Ctrl</span></div></div>
                        </div>
                        <div className="qwerty-bottom-right">
                            <div className="key key-downArrow arrow-key" id="arrowleft"><div className="keycap arrow-key"><span className="bottom">←</span></div></div>
                            <div className="key key-downArrow arrow-key" id="arrowdown"><div className="keycap arrow-key"><span className="bottom">↓</span></div></div>
                        </div>
                    </div>
                </div>
                <div className="numpad-row">
                    <div className="numpad-rows">
                        <div className="key" id="numlock"><div className="keycap"><span className="bottom">Num</span></div></div>
                        <div className="key" id="numpaddivide"><div className="keycap"><span className="bottom">/</span></div></div>
                        <div className="key" id="numpadmultiply"><div className="keycap"><span className="bottom">*</span></div></div>
                        <div className="key" id="numpadsubtract"><div className="keycap"><span className="bottom">-</span></div></div>
                    </div>
                    <div className="numpad-second">
                        <div className="key" id="numpad7"><div className="keycap"><span className="bottom">7</span></div></div>
                        <div className="key" id="numpad8"><div className="keycap"><span className="bottom">8</span></div></div>
                        <div className="key" id="numpad9"><div className="keycap"><span className="bottom">9</span></div></div>
                        <div className="key numpad-plus" id="numpadadd"><div className="keycap"><span className="bottom">+</span></div></div>
                        <div className="key" id="numpad4"><div className="keycap"><span className="bottom">4</span></div></div>
                        <div className="key" id="numpad5"><div className="keycap"><span className="bottom">5</span></div></div>
                        <div className="key" id="numpad6"><div className="keycap"><span className="bottom">6</span></div></div>
                    </div>
                    <div className="numpad-third">
                        <div className="singlekey2">
                            <div className="key" id="numpad1"><div className="keycap"><span className="bottom">1</span></div></div>
                        </div>
                        <div className="singlekey2">
                            <div className="key" id="numpad2"><div className="keycap"><span className="bottom">2</span></div></div>
                        </div>
                        <div className="singlekey2">
                            <div className="key" id="numpad3"><div className="keycap"><span className="bottom">3</span></div></div>
                        </div>
                        <div className="singlekey3">
                            <div className="key numpad-plus" id="numpadenter"><div className="keycap"><span className="bottom">↵</span></div></div>
                        </div>
                        <div className="singlekey2 key-rightArrow">
                            <div className="key key-downArrow arrow-key" id="arrowright"><div className="keycap arrow-key"><span className="bottom">→</span></div></div>
                        </div>
                        <div className="singlekey2 ">
                            <div className="key" id="numpad0"><div className="keycap"><span className="bottom">0</span></div></div>
                        </div>
                        <div className="singlekey2">
                            <div className="key" id="numpaddecimal"><div className="keycap"><span className="bottom">.</span></div></div>
                        </div>
                        <div className="singlekey2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keyboard;