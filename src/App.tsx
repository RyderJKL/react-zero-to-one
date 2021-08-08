import React, { useState } from 'react';
import './App.css';
import { Input, Card } from 'antd';
import Repositories from './Repositories';
import ConditionalRender from './rxjs-demos/conditional-render';
import DebounceTextVerification from './rxjs-demos/debounce-text-verification';
import AtomicStyles from './AtomicStyle';
import StitchesStyleDemo from './stitchesStyleDemo';

function App() {
  const [userId, setUserId] = useState('');
  const [fontSize, setFontSize] = useState(12);
  const [color, setColor] = useState('red');

  return (
    <div className="App">
      <button onClick={() => setFontSize(fontSize + 1)}>change font size</button>
      <button onClick={() => setColor('green')}>change color</button>
      <AtomicStyles />
      <StitchesStyleDemo fontSize={fontSize} backgroundColor={color} />
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
