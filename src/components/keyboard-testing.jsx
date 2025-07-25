import NavBar from "./navbar.jsx";
import Keyboard from "./keyboard.jsx";
import {useEffect, useState} from "react";

function KeyboardTester() {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.preventDefault(); // Prevent default action for keydown
      const key = event.code;
      const downkey = key.toLowerCase(); // Convert to lowercase for consistency
      document.getElementById(downkey)?.classList.add('pressed'); // Add active class to the pressed key
    };

    const handleKeyUp = (event) => {
      event.preventDefault(); // Prevent default action for keyup
      const key = event.code;
      const upkey = key.toLowerCase(); // Convert to lowercase for consistency
      const pressedKey = event.key
      document.getElementById(upkey)?.classList.remove('pressed');
      
      // Add the released key to the display array
      setDisplay(prevDisplay => [...prevDisplay, pressedKey]);
      console.log(`Key released: ${upkey}`);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []); // Empty dependency array so effect runs only once

  // Function to clear the display
  const clearDisplay = () => {
    setDisplay([]);
  };

  return (
    <>
    <main className="min-h-screen flex flex-col bg-[var(--background)]">
      <NavBar />

      {/* Hero Section */}
      <section className="py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Keyboard <span className="text-[var(--primary)]">Tester</span></h1>
        <p className="text-lg md:text-xl max-w-3xl mt-4 text-[var(--text-secondary)]">Make every keystroke count — check your keys, defeat ghosting, and boost your typing speed.</p>
      </section>

      {/* Display section */}
      <section className="lg:px-42 md:px-32 py-4">
        <div className="w-full h-24 bg-black shadow-sm rounded-lg flex items-center justify-between px-4">
          <div className="text-white font-mono text-lg overflow-x-auto flex-1">
            {display.length > 0 ? display.join(' ') : 'Start typing to see pressed keys...'}
          </div>
          <button 
            onClick={clearDisplay}
            className="ml-4 px-4 py-2 bg-[var(--primary)] text-white font-mono rounded hover:opacity-80 transition-opacity"
          >
            Clear
          </button>
        </div>
      </section>

      {/* Keyboard Section */}
      <section className="lg:px-16 md:px-8 py-4 flex justify-center">
        <Keyboard/>
      </section>
    </main>
    </>
  );
}

export default KeyboardTester;