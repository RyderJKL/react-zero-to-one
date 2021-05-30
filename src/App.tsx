import React, { useState } from 'react';
import './App.css';
import { Input, Card } from 'antd';
import Repositories from './Repositories';
import ConditionalRender from './rxjs-demos/conditional-render';
import DebounceTextVerification from './rxjs-demos/debounce-text-verification';

function App() {
  const [userId, setUserId] = useState('');

  return (
    <div className="App">
      <Card title={'Repositories'}>
        <div>
          <Input value={userId} onChange={(e) => setUserId(e.target.value.trim())} />
        </div>
        <Repositories isOpen={true} userId={userId} />
      </Card>
      <Card title={'ConditionalRender'}>
        <h2>ConditionalRender</h2>
        <div>
          <ConditionalRender />
        </div>
      </Card>
      <Card title={'DebounceTextVerification'}>
        <DebounceTextVerification uuid={'asdfa'} />
      </Card>
    </div>
  );
}

export default App;
