import NavBar from "./navbar.jsx";
import Keyboard from "./keyboard.jsx";
import {useEffect, useState} from "react";
import "../components/SpeedTest.css"; // Import the SpeedTest CSS for consistent styling

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
    <main className="min-h-screen flex flex-col bg-[var(--background)]">
      <NavBar />

      {/* Hero Section */}
      <section className="py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Keyboard <span className="text-[var(--primary)]">Tester</span></h1>
        <p className="text-lg md:text-xl max-w-3xl mt-4 text-[var(--text-secondary)]">Make every keystroke count — check your keys, defeat ghosting, and boost your typing speed.</p>
      </section>

      {/* Main Content Container - similar to SpeedTest layout */}
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16">
        {/* Left side - button area */}
        <section className="md:w-1/8 flex md:flex-col justify-center gap-4 py-2 px-12">
          <div className="stat-box">
            <div className="stat-value">{display.length}</div>
            <div className="stat-label">Keys Pressed</div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <button
              onClick={(e) => {
                clearDisplay();
                e.currentTarget.classList.add('btn-pressed');
                setTimeout(() => e.currentTarget.classList.remove('btn-pressed'), 300);
              }}
              className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium btn-animate"
            >
              Clear Display
            </button>
          </div>
        </section>
        
        {/* Right side content (display area and keyboard) */}
        <div className="md:w-6/8 flex flex-col">
          {/* Display Area - styled like typing test area */}
          <section className="mb-8">
            <div className="w-full h-auto min-h-32 bg-[var(--card-background)] shadow-md rounded-lg p-6">
              <div className="text-display">
                {display.length === 0 && (
                  <div className="text-center mb-3 text-[var(--primary)] font-medium text-2xl">
                    <span className="cursor-blink">▋</span> Start typing to test your keyboard!
                  </div>
                )}
                <div className="typing-text">
                  {display.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {display.map((key, index) => (
                        <span key={index} className="charOutline correct bg-[var(--card-background)] border border-[var(--primary)] px-3 py-1">
                          {key}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-[var(--text-secondary)]">Keys you press will appear here</span>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          {/* Virtual Keyboard Section */}
          <section className="flex justify-center">
            <Keyboard />
          </section>
        </div>
      </div>
    </main>
  );
}

export default KeyboardTester;