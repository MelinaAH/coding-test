import './App.css';
import React, { useState } from 'react';

function App() {
  const [grade, setGrade] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleMouseDown = (e) => {
    setShowResult(false);
  }

  const handleMouseUp = (e) => {
    setShowResult(true);
  }

  const handleEvent = (e) => {
    setGrade(e.target.value);
  }

  return (
    <div className='App'>
      <div>
        <h1 id='heading'>How did we succeed today</h1>
        <p className='leadP'>Rate how satisfied you are with the service you received today.</p>
      </div>
      <div>
        <label>Scale from 1 to 10</label><br></br>
        <input type="range"
          id="range"
          min={0}
          max={10}
          step={1}
          value={grade}
          onChange={handleEvent}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        <h2>You gave us a grade:</h2>
        {showResult && (
          <p className='givenGrade'>{grade}</p>
        )}
      </div>
    </div>
  );
}

export default App;
