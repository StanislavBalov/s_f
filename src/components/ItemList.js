import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import './ItemList.css';

export function ItemList() {
  const { state, dispatch } = useStore();
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (value.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: value });
      setValue('');
    }
  };

  return (
    <div className="item-list">
      <input
        placeholder="New item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {state.items.map((item, index) => (
          <li key={index}>
            <img src={`/img/item-${index % 2 === 0 ? 'blue' : 'black'}.jpg`} alt="" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
