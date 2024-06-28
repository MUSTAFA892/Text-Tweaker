import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';

const Summarizer = (props) => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState([]);

  const summarizeText = () => {
    const sentences = text.split('.').filter(sentence => sentence.trim() !== '');
    const summarySentences = sentences.slice(0, 3); // Take the first 3 sentences as the summary
    setSummary(summarySentences);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary.join('. ')).then(() => {
      props.showAlert("Text copied to clipboard!", "success");
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  const resetText = () => {
    setText('');
    setSummary([]);
    props.showAlert("Text has been reset!", "success");
  };

  return (
    <div className="summarizer-container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>Text Summarizer</h2>
      <textarea
        className="form-control"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="mybox"
        rows="8"
        placeholder="Enter Text Here"
        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
      ></textarea>
      <div>
        <button className="btn btn-primary my-3 mx-2" onClick={summarizeText}>Summarize</button>
        <button className="btn btn-primary my-3 mx-2" onClick={resetText}>Reset Text</button>
      </div>
      <h2 className='container my-2'>Summarized Text</h2>
      <div className="translated-container" style={{ position: 'relative', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        {summary.length > 0 ? (
          <ul>
            {summary.map((sentence, index) => (
              <li key={index}>{sentence.trim()}.</li>
            ))}
          </ul>
        ) : (
          <p>Nothing to preview</p>
        )}
        <button type="button" className="btn-clipboard" onClick={copyToClipboard} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaClipboard />
        </button>
      </div>
    </div>
  );
};

export default Summarizer;
