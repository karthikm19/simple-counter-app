import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Simple Counter App</h2>
        
        Counter: { count }
        
        <button onClick={ () => setCount(count+1)}>+</button>
        <button onClick={ () => setCount(count-1)}>-</button>
      </header>
    </div>
  );
}

export default App;
