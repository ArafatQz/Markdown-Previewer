import React from 'react';
import './pages.css';

export default function EditorPage({ onInputChange, value }) {
  return (
    <div className='editor'>
      <div className='edit-title'><h3>Editor Section</h3></div>
      <textarea 
        id='editor'
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}
