import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272b30";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  return (
    <>
      {/* <Router> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3" showAlert={showAlert}>
        <Alert alert={alert} showAlert={showAlert} />
      </div>
      <TextForm
        heading="Type to analyze text"
        mode={mode}
        toggleMode={toggleMode}
        showAlert={showAlert}
      />

      {/* <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Type to analyze text"
                mode={mode}
                toggleMode={toggleMode}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
