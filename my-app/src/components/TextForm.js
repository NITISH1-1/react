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

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter your text"
          onChange={handleOnChange}
          value={text}
        ></textarea>
      </div>
      <div className="flex">
      <button className="btn btn-primary cursor mx-1" onClick={handelOnClick} >Convert to Uppercase</button>
      <button className="btn btn-primary cursor mx-1" onClick={handelOnClickLo} >Convert to Lowercase</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
