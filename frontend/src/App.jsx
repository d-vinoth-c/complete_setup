import { useState } from 'react';
import axios from 'axios';

const FUNCTION_URL = 'https://us-central1-complete-setup-466211.cloudfunctions.net/greet_user';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const callGET = async () => {
    const res = await axios.get(`${FUNCTION_URL}?name=${name}`);
    setMessage(res.data.message);
  };

  const callPOST = async () => {
    const res = await axios.post(FUNCTION_URL, { name });
    setMessage(res.data.message);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>React + Firebase + Python Cloud Function</h1>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div style={{ marginTop: 10 }}>
        <button onClick={callGET}>Call GET</button>
        <button onClick={callPOST}>Call POST</button>
      </div>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
