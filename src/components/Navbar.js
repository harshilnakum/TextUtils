import React from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="">
        TextUtils
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-a" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-a" href="/about">
              About
            </a>
          </li> */}
        </ul>
        <form
          className={`form-inline my-2 my-lg-0 text-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode}`}
        >
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className={`custom-control-input bg-${props.mode}`}
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label className={`custom-control-label`} for="customSwitch1">
              Enable {props.mode} Mode
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}
