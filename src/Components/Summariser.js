import React, { useState } from 'react';

const API_KEY = 'C156CBD4B9'; // Replace with your actual API key

const App = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const summarizeText = async () => {
    const url = `https://api.smmry.com/&SM_API_KEY=${API_KEY}&SM_LENGTH=3&SM_WITH_BREAK`;

    try {
      const response = await fetch(url, {
        method: 'POST', // Adjust method based on API documentation (usually POST or GET)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Adjust based on API requirements
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSummary(data.summary); // Adjust based on API response structure

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <br />
      <button onClick={summarizeText}>Summarize Text</button>
      <br />
      <div>
        <h2>Summary:</h2>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default App;
