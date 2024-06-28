
import React, { useState, useRef } from 'react';
import translate from 'translate';
import { languages } from './languages';
import { FaClipboard } from 'react-icons/fa';


const Translator = (props) => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('ta');
  const textRef = useRef(null); 

  const translateText = async () => {
    const translation = await translate(inputText, { from: sourceLang, to: targetLang });
    setTranslatedText(translation);
    props.showAlert("Your Text has been Translated", "success");
  };



  const copyToClipboard = () => {
    const textToCopy = textRef.current.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      props.showAlert("Text copied to clipboard!", "success");
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>Translator</h1>
      <div className="my-3">
        <label className="mx-2">From: </label>
        <select
          className={`btn btn-${props.mode === 'light' ? 'light' : 'secondary'}`}
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mx-3 my-3">To: </label>
        <select
          className={`btn btn-${props.mode === 'light' ? 'light' : 'secondary'}`}
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="form-control my-2"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        id="mybox"
        rows="8"
        placeholder="Enter Text Here"
        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black',cursor:'pointer' }}
      ></textarea>
      <br />
      <button className="btn btn-primary my-1" onClick={translateText} style={{ backgroundColor: 'blue' }}>Translate</button>
      <h2 className="my-1">Translated Text:</h2>
      <div className="translated-container" style={{ position: 'relative', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p ref={textRef} style={{ marginBottom: '30px' }}>{translatedText}</p>
        <button type="button" className="btn-clipboard" onClick={copyToClipboard} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
          <FaClipboard />
        </button>
      </div>
    </div>
  );
};

export default Translator;
