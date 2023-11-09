import logo from "./logo.svg";
import "./Home.css";
import RemoteLoader from "../../remote/RemoteLoader";

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
        <div>
          <RemoteLoader
            data={{
              url: "http://localhost:3001/remoteEntry.js",
              scope: "Mfe1",
              module: "./Title",
            }}
          />
        </div>
        <div>
          <RemoteLoader
            data={{
              url: "http://localhost:3002/remoteEntry.js",
              scope: "Mfe2",
              module: "./Title",
            }}
          />
        </div>
        <div>
          <RemoteLoader
            data={{
              url: "http://localhost:3003/remoteEntry.js",
              scope: "Mfe3",
              module: "./Title",
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
