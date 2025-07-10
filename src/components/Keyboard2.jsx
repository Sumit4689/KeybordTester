import NavBar from "./NavBar";
import "./keyboard2.css";
import { use, useEffect } from "react";

function Keyboard2() {
    useEffect(() => {
        const keyboard = document.querySelector('.keyboard-container');
        const keys = keyboard.querySelectorAll('.key');
        const keycaps = keyboard.querySelectorAll('.keycap');
        const keycapsArray = Array.from(keycaps);
        const keyArray = Array.from(keys);
        const keyMap = keycapsArray.reduce((acc, keycap, index) => {
            acc[keycap.textContent.trim()] = keyArray[index];
            return acc;
        }, {});
        const handleKeyDown = (event) => {
            const key = event.key;
            if (keyMap[key]) {
                keyMap[key].classList.add('pressed');
            }
        };
    })

    return (
        <main className="min-h-screen flex flex-col bg-[var(--background)]">
            <NavBar />

            {/* Hero Section */}
            <section className="py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Keyboard <span className="text-[var(--primary)]">Tester</span></h1>
                <p className="text-lg md:text-xl max-w-3xl mt-4 text-[var(--text-secondary)]">Make every keystroke count — check your keys, defeat ghosting, and boost your typing speed.</p>
            </section>

            {/* Display section */}
            <section className="lg:px-42 md:px-32 py-4">
                <div className="w-full h-24 bg-black shadow-sm rounded-lg flex items-center justify-center )">
                </div>
            </section>

            {/* Keyboard Section */}
            <section className="lg:px-16 md:px-8 py-4 flex justify-center">
                <div className="keyboardCasing rounded-lg shadow-lg p-6">
                    <div className="keyboard-container bg-[var(--card-background)] rounded-lg p-6">
                        <div className="function-key">
                            <div className="singlekey">
                                <div className="key escape-key"><div className="keycap escape-key"><span className="bottom">Esc</span></div></div>
                            </div>
                            <div className="key-cluster">
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F1</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F2</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F3</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F4</span></div></div>
                            </div>
                            <div className="key-cluster">
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F5</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F6</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F7</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F8</span></div></div>
                            </div>
                            <div className="key-cluster">
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F9</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F10</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F11</span></div></div>
                                <div className="key function-row functions-key"><div className="keycap functions-key"><span className="bottom">F12</span></div></div>
                            </div>
                            <div className="singlekey">
                                <div className="key"><div className="keycap"><span className="bottom">Del</span></div></div>
                            </div>
                        </div>
                        <div className="numpad-Top-row">
                            <div className="key"><div className="keycap"><span className="bottom">Ins</span></div></div>
                            <div className="key"><div className="keycap"><span className="bottom">PgUp</span></div></div>
                            <div className="key"><div className="keycap"><span className="bottom">PgDn</span></div></div>
                            <div className="roundkeybase">
                                <div className="roundkey round-knob"><div className="roundkeycap round-knob"><span>⚙</span></div></div>
                            </div>
                        </div>
                        <div className="keyboard-row">
                            <div className="Number-row">
                                <div className="key"><div className="keycap"><span className="top">~</span><span className="bottom">`</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">!</span><span className="bottom">1</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">@</span><span className="bottom">2</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">#</span><span className="bottom">3</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">$</span><span className="bottom">4</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">%</span><span className="bottom">5</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">^</span><span className="bottom">6</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">&</span><span className="bottom">7</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">*</span><span className="bottom">8</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">(</span><span className="bottom">9</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">)</span><span className="bottom">0</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">_</span><span className="bottom">-</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">+</span><span className="bottom">=</span></div></div>
                                <div className="key key-backspace modifier-key"><div className="keycap modifier-key"><span className="bottom">Backspace</span></div></div>
                            </div>
                            <div className="qwerty-first">
                                <div className="key key-wide"><div className="keycap"><span className="bottom">Tab</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">Q</span></div></div>
                                <div className="key wasd-key"><div className="keycap wasd-key"><span className="bottom">W</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">E</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">R</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">T</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">Y</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">U</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">I</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">O</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">P</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">{'{'}</span><span className="bottom">[</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">{'}'}</span><span className="bottom">]</span></div></div>
                                <div className="key key-wide"><div className="keycap"><span className="top">|</span><span className="bottom">\</span></div></div>
                            </div>
                            <div className="qwerty-second">
                                <div className="key key-caps"><div className="keycap"><span className="bottom">Caps Lock</span></div></div>
                                <div className="key wasd-key"><div className="keycap wasd-key"><span className="bottom">A</span></div></div>
                                <div className="key wasd-key"><div className="keycap wasd-key"><span className="bottom">S</span></div></div>
                                <div className="key wasd-key"><div className="keycap wasd-key"><span className="bottom">D</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">F</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">G</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">H</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">J</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">K</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">L</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">:</span><span className="bottom">;</span></div></div>
                                <div className="key"><div className="keycap"><span className="top">"</span><span className="bottom">'</span></div></div>
                                <div className="key key-enter wasd-key"><div className="keycap wasd-key"><span className="bottom">Enter</span></div></div>
                            </div>
                            <div className="qwerty-third">
                                <div className="qwerty-third-left">
                                    <div className="key key-shift-Left modifier-key"><div className="keycap modifier-key"><span className="bottom">Shift</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">Z</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">X</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">C</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">V</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">B</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">N</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">M</span></div></div>
                                    <div className="key"><div className="keycap"><span className="top">&lt;</span><span className="bottom">,</span></div></div>
                                    <div className="key"><div className="keycap"><span className="top">&gt;</span><span className="bottom">.</span></div></div>
                                    <div className="key"><div className="keycap"><span className="top">?</span><span className="bottom">/</span></div></div>
                                    <div className="key key-shift-Right modifier-key"><div className="keycap modifier-key"><span className="bottom">Shift</span></div></div>
                                </div>
                                <div className="qwerty-third-right">
                                    <div className="key arrow-key"><div className="keycap arrow-key"><span className="bottom">↑</span></div></div>
                                </div>
                            </div>
                            <div className="qwerty-bottom">
                                <div className="qwerty-bottom-left">
                                    <div className="key key-ctrl modifier-key"><div className="keycap modifier-key"><span className="bottom">Ctrl</span></div></div>
                                    <div className="key key-ctrl"><div className="keycap"><span className="bottom">⊞</span></div></div>
                                    <div className="key key-alt modifier-key"><div className="keycap modifier-key"><span className="bottom">Alt</span></div></div>
                                    <div className="key key-space"><div className="keycap"></div></div>
                                    <div className="key modifier-key"><div className="keycap modifier-key"><span className="bottom">Alt</span></div></div>
                                    <div className="key"><div className="keycap"><span className="bottom">Fn</span></div></div>
                                    <div className="key modifier-key"><div className="keycap modifier-key"><span className="bottom">Ctrl</span></div></div>
                                </div> 
                                <div className="qwerty-bottom-right">
                                    <div className="key key-downArrow arrow-key"><div className="keycap arrow-key"><span className="bottom">←</span></div></div>
                                    <div className="key key-downArrow arrow-key"><div className="keycap arrow-key"><span className="bottom">↓</span></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="numpad-row">
                            <div className="numpad-rows">
                                <div className="key"><div className="keycap"><span className="bottom">Num</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">/</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">*</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">-</span></div></div>
                            </div>
                            <div className="numpad-second">
                                <div className="key"><div className="keycap"><span className="bottom">7</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">8</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">9</span></div></div>
                                <div className="key numpad-plus"><div className="keycap"><span className="bottom">+</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">4</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">5</span></div></div>
                                <div className="key"><div className="keycap"><span className="bottom">6</span></div></div>
                            </div>
                            <div className="numpad-third">
                                <div className="singlekey2">
                                <div className="key"><div className="keycap"><span className="bottom">1</span></div></div>
                                </div>
                                <div className="singlekey2">
                                    <div className="key"><div className="keycap"><span className="bottom">2</span></div></div>
                                </div>
                                <div className="singlekey2">
                                    <div className="key"><div className="keycap"><span className="bottom">3</span></div></div>
                                </div>
                                <div className="singlekey3">
                                    <div className="key numpad-plus"><div className="keycap"><span className="bottom">↵</span></div></div>
                                </div>
                                <div className="singlekey2 key-rightArrow">
                                    <div className="key key-downArrow arrow-key"><div className="keycap arrow-key"><span className="bottom">→</span></div></div>
                                </div>
                                <div className="singlekey2 ">
                                    <div className="key"><div className="keycap"><span className="bottom">0</span></div></div>
                                </div>
                                <div className="singlekey2">
                                    <div className="key"><div className="keycap"><span className="bottom">.</span></div></div>
                                </div>
                                <div className="singlekey2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Keyboard2;