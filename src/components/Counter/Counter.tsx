import { useState } from 'preact/hooks';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '0.5rem' }}>
        Decrement
      </button>
    </div>
  );
}