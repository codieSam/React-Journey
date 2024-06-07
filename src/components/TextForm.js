import React, { useState } from "react";

//hook [State]

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const hideValue = () => {
    setText(" ");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleDelClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="container my-3">
          <label>
            <h1>{props.heading}</h1>
          </label>
          <textarea
            onClick={hideValue}
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myText"
            rows="6"
          ></textarea>

          <button className="btn btn-primary mt-3" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mt-3 mx-3"
            onClick={handleDelClick}
          >
            Clear Text
          </button>
          <button className="btn btn-primary mt-3 mx-3" onClick={handleCopy}>
            Copy Text
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h2 className=" my-2">Word: {text}</h2>
        <h2 className=""> Total letters: {text.length} </h2>
        <h2>Word: {text.split(" ").length}</h2>
        <h2>
          Time to read total words: {text.split(" ").length * 0.008} Minutes
        </h2>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
