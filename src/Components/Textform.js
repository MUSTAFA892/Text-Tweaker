
import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("");
    const [textStyle, setTextStyle] = useState({});

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    };

    const handleClearText = () => {
        setText('');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleTextStyle = (style,num) => {
        if (num === 1){
            setTextStyle(style);
            props.showAlert("Changed to Bold", "success")
        }else if (num === 2){
            setTextStyle(style);
            props.showAlert("Changed to Italic", "success")
        }else{
            setTextStyle(style);
            props.showAlert("Changed to Underline", "success")
        }
        
        
    };
    const RestTextStyle = () => {
      setTextStyle({});
      props.showAlert("Text Style Reset","success")
    }

    const handleCopyText = () => {
    //   navigator.clipboard.writeText(text).then(() => {
    //       alert('Text copied to clipboard');
    //   }).catch(err => {
    //       console.error('Failed to copy text: ', err);
    //   });
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","success")
    }

    const handleExtraSpaces = () => {
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))
      props.showAlert("Extra spaces removed","success")
    }
    return (
        <>
            <div className="container" style={{color : props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange} 
                        id="mybox"
                        rows="8"
                        placeholder="Enter Text Here"
                        style = {{backgroundColor : props.mode === 'dark'?'grey':'white',...textStyle,color:props.mode === 'dark'?'white':'black',cursor:'pointer'} }
                        
                    ></textarea>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                
                <div className="btn-group">
                    <button disabled = {text.length === 0} className="btn btn-primary dropdown-toggle mx-2 my-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Change Styles
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => handleTextStyle({ fontWeight: 'bold', },1)}>Bold</button></li>
                        <li><button className="dropdown-item" onClick={() => handleTextStyle({ fontStyle: 'italic' },2)}>Italic</button></li>
                        <li><button className="dropdown-item" onClick={() => handleTextStyle({ textDecoration: 'underline' },3)}>Underline</button></li>
                        <li><button className="dropdown-item" onClick={RestTextStyle}>Back to Normal</button></li>
                    </ul>
                </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.trim().split(/\s+/).filter(word => word).length} words and {text.length} characters</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(word => word).length} Minutes read</p>
                <h2>Preview</h2>
                <p style={textStyle}>{text.length>0?text:"Nothing to preview"}</p>

            </div>
        </>
    );
}
