import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Mfe1Title from 'Mfe1/Title';
import Mfe2Title from 'Mfe2/Title';
import Mfe3Title from 'Mfe3/Title';
import RemoteWrapper from '../../components/RemoteWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <RemoteWrapper><Mfe1Title /></RemoteWrapper>
        <RemoteWrapper><Mfe2Title /></RemoteWrapper>
        <RemoteWrapper><Mfe3Title /></RemoteWrapper>
      </header>
    </div>
  );
}

export default App;
