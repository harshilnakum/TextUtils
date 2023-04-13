import React from "react";
import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCpClick = () => {
    var nt = document.getElementById("myBox");

    navigator.clipboard.writeText(nt.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter");
  return (
    <>
      <div className="container ">
        <h3
          className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {props.heading}
        </h3>

        <div className="form-group">
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            } bg-${props.mode}`}
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={handleUpClick}
        >
          ToUpperCase
        </button>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={handleLoClick}
        >
          ToLowerCase
        </button>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={handleClClick}
        >
          Clear
        </button>
        <button
          className={`btn btn-${props.mode} mx-2`}
          onClick={handleCpClick}
        >
          Copy
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Text summary</h3>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} minutes</p>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
