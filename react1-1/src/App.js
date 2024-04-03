import logo from './logo.svg';
import './App.css';
import Welcome from './chapter_05/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <Welcome name="인제"/>
      <Welcome name="순신"/>
      <Welcome name="강참"/>
    </div>
  );
}

export default App;
