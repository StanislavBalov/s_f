import React from 'react';
import { useStore } from '../store/useStore';

export function Counter() {
  const { state, dispatch } = useStore();

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    </div>
  );
}