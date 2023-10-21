import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Same from './same';

function App() {
  const [count, setCount ] = useState(0);
  return (
    <div>
      {/*<p>You clicked {count} times </p>
      <button className='bg-slate-300 w-32' onClick={() => setCount(count+1)}>
        Click meeeeee
      </button>*/}
      <Same/>
    </div>
  );
}

export default App;
