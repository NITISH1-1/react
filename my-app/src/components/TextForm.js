import React, {useState} from "react";

export default function TextForm(props) {
  const handelOnClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handelOnClickLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log('being changed')
    setText(event.target.value);
  }

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const [text, setText] = useState("");
  return (
    <>
      <div style={{color: props.mode === 'light' ? 'black': 'white'}} className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter your text"
          onChange={handleOnChange}
          value={text}
          style={{backgroundColor: props.mode === 'light' ? 'white': 'grey', color: props.mode === 'light' ? 'black': 'white' }}
        ></textarea>
      </div>
      <div className="flex">
      <button className="btn btn-primary cursor mx-1" onClick={handelOnClick} >Convert to Uppercase</button>
      <button className="btn btn-primary cursor mx-1" onClick={handelOnClickLo} >Convert to Lowercase</button>
      <button className="btn btn-primary cursor mx-1" onClick={handelExtraSpaces} >Remove Extra Spaces</button>

      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black': 'white'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Etner something above to preview it'}</p>
      </div>
    </>
  );
}
