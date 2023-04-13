import React, { useState } from "react";

export default function About() {
  let handleOnClick = () => {
    if (mySt === "To Dark Mode") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        width: 400,
      });
      setMySt("To Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        width: 400,
      });
      setMySt("To Dark Mode");
    }
  };

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    width: 400,
  });

  const [mySt, setMySt] = useState("To Dark Mode");

  return (
    <>
      <div className="container my-3">
        <div class="card" style={myStyle}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" class="card-link">
              Card link
            </a>
            <a href="/" class="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={handleOnClick}>
          {mySt}
        </button>
      </div>
    </>
  );
}
