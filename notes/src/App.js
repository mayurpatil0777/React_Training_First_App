import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Notes from './Notes/Notes';

function App() {
  return (
    <div className="">
      <h1 className="pl-3">Welcome to first page</h1>
      <Notes/>
    </div>
  );
}

export default App;
