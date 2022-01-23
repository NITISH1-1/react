import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";

import { useState } from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042842";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About US"
        />
        <Alert className="my-3" alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={
              <TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Enter the text to analyze below"
              />
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
