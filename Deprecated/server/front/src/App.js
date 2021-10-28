/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'; 
import axios from  'axios';
import './App.css';

function App() {

  const [message, setMessage] = useState("");

  useEffect(async () => {
    const request = await axios.get('http://localhost:4444/hi');
    setMessage(request?.data.message)
  }, []);


  return (
    <div className="App">
      {message}
    </div>
  );
}

export default App;
