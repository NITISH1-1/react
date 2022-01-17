import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {useState} from "react";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042842';
    } else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About US" />
      <div className="container my-3">
        <TextForm mode={mode} heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
