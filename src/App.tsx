import React, { useState } from 'react';
import './App.css';
import { Input } from 'antd';
import Repositories from './Repositories';

function App() {
  const [userId, setUserId] = useState('');

  return (
    <div className="App">
      <div>
        <Input value={userId} onChange={(e) => setUserId(e.target.value.trim())} />
      </div>
      <Repositories isOpen={true} userId={userId} />
    </div>
  );
}

export default App;
