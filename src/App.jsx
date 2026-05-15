import { createContext, useContext, useState } from 'react';
import './App.css';

// Create Context
const CounterContext = createContext();

// Provider Component
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  // Functions
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

  const reset = () => {
    setCount(0);
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        reset
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

// Counter Display Component
function CounterDisplay() {
  const { count } = useContext(CounterContext);

  return (
    <h2>Count: {count}</h2>
  );
}

// Counter Controls Component
function CounterControls() {
  const { increment, decrement, reset } = useContext(CounterContext);

  return (
    <div>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Main App
function App() {
  return (
    <CounterProvider>
      <h1>React Global Counter</h1>

      <CounterDisplay />

      <CounterControls />

      {/* Bonus Second Display */}
      <CounterDisplay />
    </CounterProvider>
  );
}

export default App;