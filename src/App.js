import './App.css';
import { ChangeEvent, useState } from 'react';

function App() {
  const [file, setFile] = useState();

  const handleUpload = () => {
    if (!file) {
      return;
    }

  }

  return (
    <div className="Body">
      <div className="Sidebar">
        <b>Input your calendars here!</b>
        <input type="file" accept=".ics" />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="Calendar">
        <b>Calendar!</b>
      </div>
    </div>
  );
}

export default App;
