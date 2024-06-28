import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { languages } from './languages';
import { useState, useEffect } from "react";
import { FaClipboard } from 'react-icons/fa';

const App = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    const startListening = () => {
        console.log("Listening started");
        SpeechRecognition.startListening({ continuous: true, language: selectedLanguage});
        props.showAlert("Recording has been started!!","success")
    };
    const stopListening = () =>{
        SpeechRecognition.stopListening()
        props.showAlert("Recording has been stopped!!","success")
    }
    const resetText = () =>{
        resetTranscript()
        props.showAlert("Text has been reset!!","success")
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transcript)
          props.showAlert("Text copied to clipboard!", "success");
      };
    


    useEffect(() => {
        console.log("Transcript updated:", transcript);
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return <p>Your browser does not support speech recognition.</p>;
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Speech to Text Converter</h2>
                <br />
                <div className="language-select">
                <label>Select Language: </label>
                <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className={`btn btn-${props.mode  === 'light'?'light':'secondary'} mx-2`}
                >
                    {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
            </div>
                
                <div className="translated-container my-3" style={{ position: 'relative', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button className="btn btn-primary mx-2 my-2" onClick={startListening}>Start Listening</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={stopListening}>Stop Listening</button>
                    <button className="btn btn-primary mx-2 my-2" onClick={resetText}>Reset Transcript</button>
                </div >
                <div className='container my-4'>
                <h2>Your Text Summary</h2>
                <p>{transcript.trim().split(/\s+/).filter(word => word).length} words and {transcript.length} characters</p>
                <p>{0.008 * transcript.trim().split(/\s+/).filter(word => word).length} Minutes read</p>
                <h2>Preview</h2>
                <div className="translated-container my-3" style={{ position: 'relative', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
                <p >{ transcript.length>0?transcript:"Nothing to preview"}</p>
                <button type="button" className="btn-clipboard btn-secondary" onClick={copyToClipboard} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaClipboard />
                </button>
                </div>
                </div>
            </div>
        </>
    );
};

export default App;
