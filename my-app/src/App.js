import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

import {useState} from "react";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042842';
      showAlert("Dark mode has been enabled", "success")
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About US" />
      <Alert className="my-3" alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
