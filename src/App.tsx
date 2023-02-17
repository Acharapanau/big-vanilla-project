import React from 'react';
import './App.css';

function App() {
    const names =["Dimych", "Sveta", "Katya", "Viktor", "Ignat"]
    const users = [{id:123, name:'Dimych'},{id:1234, name:'Sveta'},{id:4321, name:'Katya'},{id:543, name: 'Viktor'},{id:175, name: 'Ignat'}]

    const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)
  return (
    <div className="App">
      <ul>
          {liElements}
      </ul>
    </div>
  );
}

export default App;
