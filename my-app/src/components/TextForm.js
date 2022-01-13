import React, {useState} from "react";

export default function TextForm(props) {
  const handelOnClick = () => {
    console.log('being clicked')
    setText("You have clicked on handle");
  }

  const handleOnChange = () => {
    console.log('being changed')
  }

  const [text, setText] = useState("Enter your text");
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleOnChange}
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary cursor" onClick={handelOnClick} >Convert to Uppercase</button>
    </div>
  );
}
