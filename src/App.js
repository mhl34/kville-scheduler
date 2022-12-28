import './App.css';
import { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

function App() {
  const [file, setFile] = useState();

  const handleUpload = () => {
    /*
    const files = document.getElementById("fileList").files;
    let fileReader = new FileReader();

    if (!files) {
      return;
    }
    var fileIcs = {}
    console.log(files)
    for (let i = 0; i < files.length; i++) {
      Object.assign(fileIcs, files[i])
    }
    setFile(fileIcs);
    console.log(file);
    alert("File Upload Successful!");
    */
    const files = document.getElementById("fileList").files;
    setFile(files[0]);
  }

  return (
    <div className="Body">
      <div className="Sidebar">
        <b>Input your calendars here!</b>
        <input id="fileList" type="file" accept=".ics" multiple />
        <button onClick={handleUpload}>Upload</button>
      </div>
      <div className="Calendar">
        <b>Calendar!</b>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridWeek"
        />
      </div>
    </div>
  );
}

export default App;
