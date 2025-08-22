import React, { useEffect, useRef } from 'react';
import './HeatMap.css';

function HeatMap({ mistakeData }) {
  const keyboardRef = useRef(null);

  useEffect(() => {
    if (!keyboardRef.current) return;
    
    // Clear any existing heatmap elements
    const existingHeatmap = document.querySelectorAll('.heatmap-key');
    existingHeatmap.forEach(el => el.remove());
    
    // Get all the keys in the keyboard
    const keys = document.querySelectorAll('.key');
    
    // Calculate the max error count to scale the heat properly
    const maxErrors = Math.max(...Object.values(mistakeData));
    
    // Create overlay for each key with mistakes
    keys.forEach(key => {
      const keyId = key.id;
      
      // Skip if no mistakes for this key or if the key doesn't have an ID
      if (!keyId || !mistakeData[keyId]) return;
      
      // Get the key's position
      const keyRect = key.getBoundingClientRect();
      const keyboardRect = keyboardRef.current.getBoundingClientRect();
      
      // Create a heat overlay element
      const heatElement = document.createElement('div');
      heatElement.className = 'heatmap-key';
      
      // Position the heat overlay relative to the keyboard container
      heatElement.style.left = `${keyRect.left - keyboardRect.left}px`;
      heatElement.style.top = `${keyRect.top - keyboardRect.top}px`;
      heatElement.style.width = `${keyRect.width}px`;
      heatElement.style.height = `${keyRect.height}px`;
      
      // Calculate heat level based on mistake count (1-5 scale)
      const errorCount = mistakeData[keyId];
      const heatLevel = Math.min(5, Math.ceil((errorCount / maxErrors) * 5));
      heatElement.classList.add(`heat-level-${heatLevel}`);
      
      // Add data attributes for tooltips
      heatElement.setAttribute('data-errors', errorCount);
      heatElement.setAttribute('data-key', keyId);
      
      // Add tooltip
      heatElement.title = `${errorCount} mistake${errorCount !== 1 ? 's' : ''} on this key`;
      
      // Add to keyboard
      keyboardRef.current.appendChild(heatElement);
    });
  }, [mistakeData]);

  return (
    <div className="heatmap-container">
      <h3 className="heatmap-title">Typing Errors Heat Map</h3>
      <p className="heatmap-subtitle">See where you made the most mistakes</p>
      
      <div className="keyboard-heatmap" ref={keyboardRef}></div>
      
      <div className="heatmap-legend">
        <div className="legend-item">
          <div className="legend-color color-low"></div>
          <span>Few Mistakes</span>
        </div>
        <div className="legend-item">
          <div className="legend-color color-medium"></div>
          <span>Some Mistakes</span>
        </div>
        <div className="legend-item">
          <div className="legend-color color-high"></div>
          <span>Many Mistakes</span>
        </div>
      </div>
    </div>
  );
}

export default HeatMap;
