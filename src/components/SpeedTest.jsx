import React, { useState, useEffect, useRef } from 'react';
import NavBar from './navbar.jsx';
import Keyboard from './keyboard.jsx';
import './SpeedTest.css';

// Sample paragraphs for typing test
const paragraphs = [
  "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs. How vexingly quick daft zebras jump!",
  "Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer programming languages like JavaScript etc.",
  "A keyboard is an input device that uses a set of buttons or keys to act as mechanical levers or electronic switches to input text into a computer or other devices.",
  "The Internet is a global system of interconnected computer networks that use the standard Internet protocol suite to link devices worldwide. It is a network of networks.",
  "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction."
];

function SpeedTest() {
  const [text, setText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isFinished, setIsFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mistakes, setMistakes] = useState(0);
  const [highlightedText, setHighlightedText] = useState([]);
  const [mistakesByKey, setMistakesByKey] = useState({});
  const [lastKeyPressed, setLastKeyPressed] = useState(null);
  
  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Get random paragraph when test starts
  const getRandomParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  };

  // Start a new typing test
  const startTest = () => {
    const newText = getRandomParagraph();
    setText(newText);
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsFinished(false);
    setIsActive(false);
    setTimeElapsed(0);
    setMistakes(0);
    setMistakesByKey({});
    setLastKeyPressed(null);
    
    // Reset all mistake level styling
    document.querySelectorAll('.key').forEach(key => {
      key.classList.remove(
        'mistake-level-1',
        'mistake-level-2',
        'mistake-level-3',
        'mistake-level-4',
        'mistake-level-5'
      );
      key.removeAttribute('title');
    });
    
    // Initialize highlighted text array
    const initialHighlightedText = newText.split('').map((char, index) => ({
      char,
      // Set the first character as current, rest as pending
      status: index === 0 ? 'current' : 'pending',
      key: index
    }));
    setHighlightedText(initialHighlightedText);
    
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Initialize on component mount
  useEffect(() => {
    startTest();
    
    // Set up document-wide focus management
    const handleFocus = () => {
      if (inputRef.current && !isFinished) {
        setTimeout(() => {
          inputRef.current.focus();
        }, 0);
      }
    };
    
    // Force focus on input when clicking anywhere
    const handleDocumentClick = () => {
      handleFocus();
    };
    
    // Also refocus when window gets focus
    window.addEventListener('focus', handleFocus);
    document.addEventListener('click', handleDocumentClick);
    
    // Initial focus
    handleFocus();
    
    return () => {
      // Clean up event listeners
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('click', handleDocumentClick);
      
      // Reset all mistake styling on unmount
      document.querySelectorAll('.key').forEach(key => {
        key.classList.remove(
          'mistake-level-1',
          'mistake-level-2',
          'mistake-level-3',
          'mistake-level-4',
          'mistake-level-5'
        );
        key.removeAttribute('title');
      });
    };
  }, []);

  // Handle timer
  useEffect(() => {
    if (isActive && !isFinished) {
      timerRef.current = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isActive, isFinished]);

  // Handle keyboard events for highlighting text during typing
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Add the pressed animation to the key on the virtual keyboard
      const key = event.code;
      const downkey = key.toLowerCase(); // Convert to lowercase for consistency
      document.getElementById(downkey)?.classList.add('pressed'); // Add active class to the pressed key
      setLastKeyPressed(downkey); // Store the currently pressed key for mistake tracking
      
      // Prevent default action for certain keys to disable backspace
      if (event.key === 'Backspace' || 
          event.key === 'Delete' || 
          event.key === 'ArrowLeft' || 
          event.key === 'ArrowRight') {
        event.preventDefault();
        return;
      }
      
      // If it's already finished, don't allow more typing
      if (isFinished) return;
      
      // If it's a character key, add to input
      if (event.key.length === 1) {
        // Don't prevent default for regular character keys
        setUserInput(prev => {
          const newInput = prev + event.key;
          processInput(newInput);
          return newInput;
        });
      }
    };

    const handleKeyUp = (event) => {
      // Remove the pressed animation from the key on the virtual keyboard
      const key = event.code;
      const upkey = key.toLowerCase(); // Convert to lowercase for consistency
      document.getElementById(upkey)?.classList.remove('pressed');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Cleanup function to remove event listeners
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isFinished, text, highlightedText]);

  // Process input text and update state
  const processInput = (input) => {
    // Start timer on first keypress
    if (!startTime && input.length > 0) {
      setStartTime(Date.now());
      setIsActive(true);
    }
    
    // Calculate current progress and update highlighting
    const updatedHighlightedText = [...highlightedText];
    let currentMistakes = 0;
    let justMadeError = false;
    
    for (let i = 0; i < text.length; i++) {
      // Reset all current indicators first
      if (updatedHighlightedText[i].status === 'current') {
        updatedHighlightedText[i].status = 'pending';
      }
      
      if (i < input.length) {
        // Character has been typed
        if (text[i] === input[i]) {
          updatedHighlightedText[i].status = 'correct';
        } else {
          updatedHighlightedText[i].status = 'incorrect';
          currentMistakes++;
          
          // Track this mistake if it's the latest character input
          if (i === input.length - 1 && lastKeyPressed) {
            justMadeError = true;
            // Update mistake count for this key
            setMistakesByKey(prev => {
              const updated = { ...prev };
              updated[lastKeyPressed] = (updated[lastKeyPressed] || 0) + 1;
              
              // Update the key's border color in real-time
              const keyElement = document.getElementById(lastKeyPressed);
              if (keyElement) {
                // Remove any existing mistake level classes
                keyElement.classList.remove(
                  'mistake-level-1', 
                  'mistake-level-2', 
                  'mistake-level-3', 
                  'mistake-level-4', 
                  'mistake-level-5'
                );
                
                // Calculate mistake level (1-5) and apply the appropriate class
                const mistakeCount = updated[lastKeyPressed];
                const level = Math.min(5, Math.ceil(mistakeCount / 2)); // Increase level every 2 mistakes
                keyElement.classList.add(`mistake-level-${level}`);
                
                // Add tooltip showing mistake count
                keyElement.title = `${mistakeCount} mistake${mistakeCount !== 1 ? 's' : ''} on this key`;
              }
              
              return updated;
            });
          }
        }
      } else {
        // Character not yet typed
        updatedHighlightedText[i].status = 'pending';
        
        // Mark the next character to be typed as current
        if (i === input.length) {
          updatedHighlightedText[i].status = 'current';
        }
      }
    }
    
    setMistakes(currentMistakes);
    setHighlightedText(updatedHighlightedText);
    
    // Calculate current accuracy
    const currentAccuracy = input.length > 0 
      ? Math.max(0, Math.floor(((input.length - currentMistakes) / input.length) * 100)) 
      : 100;
    setAccuracy(currentAccuracy);
    
    // Check if the test is completed
    if (input.length === text.length) {
      const endTimeStamp = Date.now();
      setEndTime(endTimeStamp);
      setIsActive(false);
      setIsFinished(true);
      
      // Calculate WPM (words per minute)
      const minutes = (endTimeStamp - startTime) / 60000; // Convert to minutes
      const words = text.trim().split(/\s+/).length;
      const calculatedWpm = Math.round(words / minutes);
      setWpm(calculatedWpm);
    }
  };
  
  // This is now a dummy handler since we're using keyboard events directly
  const handleInputChange = () => {};

  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="py-6 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Typing <span className="text-[var(--primary)]">Speed Test</span></h1>
        <p className="text-lg md:text-xl max-w-3xl mt-4 text-[var(--text-secondary)]">Check your typing speed and improve your keyboard skills.</p>
        <p className="text-md max-w-3xl mt-2 text-[var(--primary)] font-medium">Note: Backspace is disabled. Type carefully!</p>
      </section>
      
      {/* Main Typing Test Container */}
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-16">
        {/* Stats Section - Moved to the left side on larger screens */}
        <section className="md:w-1/8 flex md:flex-col justify-center gap-4 py-2 px-12">
          <div className="stat-box">
            <div className="stat-value">{wpm}</div>
            <div className="stat-label">WPM</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{accuracy}%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{timeElapsed}s</div>
            <div className="stat-label">Time</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{mistakes}</div>
            <div className="stat-label">Errors</div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <button
              onClick={(e) => {
                startTest();
                // Add button press animation
                e.currentTarget.classList.add('btn-pressed');
                setTimeout(() => e.currentTarget.classList.remove('btn-pressed'), 300);
                // Ensure input gets focus after test is reset
                setTimeout(() => {
                  if (inputRef.current) inputRef.current.focus();
                }, 0);
              }}
              className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium btn-animate"
            >
              {isFinished ? 'Try Again' : 'New Test'}
            </button>
          </div>
        </section>
        
        {/* Right side content (typing area and keyboard) */}
        <div className="md:w-6/8 flex flex-col">
          {/* Typing Test Area */}
          <section className="mb-8">
            <div className="w-full h-auto min-h-32 bg-[var(--card-background)] shadow-md rounded-lg p-6">
              <div className="text-display">
                {!startTime && (
                  <div className="text-center mb-3 text-[var(--primary)] font-medium text-2xl">
                    <span className="cursor-blink">▋</span> Just start typing when ready!
                  </div>
                )}
                <div className="typing-text">
                  {highlightedText.map(({ char, status, key }) => (
                    <span key={key} className={`char ${status}`}>
                      {char}
                    </span>
                  ))}
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
      
      {/* Hidden input to maintain focus for keyboard events */}
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        className="opacity-0 h-0 w-0 absolute pointer-events-none"
        autoFocus
      />
      
      {/* Results Section (shown when test is finished) */}
      {isFinished && (
        <section className="max-w-4xl mx-auto w-full px-4 py-6">
          <div className="results-card rounded-lg p-6 bg-[var(--card-background)] shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Test Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="result-item">
                <h3 className="text-lg font-medium text-[var(--text-secondary)]">Speed</h3>
                <p className="text-3xl font-bold text-[var(--primary)]">{wpm} WPM</p>
              </div>
              <div className="result-item">
                <h3 className="text-lg font-medium text-[var(--text-secondary)]">Accuracy</h3>
                <p className="text-3xl font-bold text-[var(--primary)]">{accuracy}%</p>
              </div>
              <div className="result-item">
                <h3 className="text-lg font-medium text-[var(--text-secondary)]">Time</h3>
                <p className="text-3xl font-bold text-[var(--primary)]">{timeElapsed}s</p>
              </div>
              <div className="result-item">
                <h3 className="text-lg font-medium text-[var(--text-secondary)]">Errors</h3>
                <p className="text-3xl font-bold text-[var(--primary)]">{mistakes}</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-[var(--text-secondary)]">
                {wpm < 30 ? 'Keep practicing! You can improve your speed.' : 
                 wpm < 50 ? 'Good job! You have average typing speed.' : 
                 wpm < 70 ? 'Great typing speed! You\'re above average.' : 
                 'Excellent! You\'re a typing master!'}
              </p>
            </div>
            
            {/* Key Mistake Legend */}
            {Object.keys(mistakesByKey).length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-center mb-2">Typing Errors Heatmap</h3>
                <p className="text-sm text-center text-[var(--text-secondary)] mb-3">
                  The keyboard shows your error patterns in real-time. Keys with more mistakes have darker borders.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 border-2 border-[rgba(255,152,0,0.3)]"></div>
                    <span className="text-sm">1-2 mistakes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 border-2 border-[rgba(255,87,34,0.5)]"></div>
                    <span className="text-sm">3-4 mistakes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 mr-2 border-2 border-[rgba(244,67,54,0.7)]"></div>
                    <span className="text-sm">5+ mistakes</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      
      {/* Tips Section */}
      <section className="max-w-4xl mx-auto w-full px-4 py-6">
        <div className="tips-card rounded-lg p-6 bg-[var(--card-background)] shadow-md">
          <h2 className="text-xl font-bold mb-4">Tips to Improve Your Typing Speed</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Practice proper finger positioning - each finger should cover specific keys</li>
            <li>Focus on accuracy first, speed will come with practice</li>
            <li>Try not to look at the keyboard while typing</li>
            <li>Take regular breaks to avoid fatigue</li>
            <li>Practice regularly, even just for 10-15 minutes a day</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default SpeedTest;
