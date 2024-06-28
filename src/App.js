import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import Translator from './Components/Translator';
import About from './Components/About';
import VoiceText from './Components/VoiceText'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Summariser from './Components/Summariser';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [themes, setThemes] = useState('');

  const changeTheme = (theme) => {
    setThemes(theme);
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar title='TextTweaker' about='About Us' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} theme={themes} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/translator" element={<Translator mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/VoiceText" element={<VoiceText mode={mode} showAlert={showAlert}/>} />
            <Route exact path="/Text-Tweaker" element={<Textform heading="Text-Tweaker" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/Summariser" element = {<Summariser mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
