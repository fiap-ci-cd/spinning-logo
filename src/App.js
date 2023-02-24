import logo from './logo.svg';
import fiapLogo from './fiap-logo.png';
import './App.css';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';

function App() {
  const { imageSwitch } = useFlags();
  console.log("imageSwitch: " + imageSwitch);
  return (
    <div className="App">
      <header className="App-header">
        { imageSwitch ? <img src={ fiapLogo } className="App-logo" alt="logo" /> :
        <img src={ logo } className="App-logo" alt="logo" /> }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: '63efc2aefc4fae13633a6799',
  options: {
    bootstrap: 'localStorage',
  },
})(App);
