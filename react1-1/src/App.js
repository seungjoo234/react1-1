import logo from './logo.svg';
import './App.css';
import Welcome from './chapter_05/Welcome';
import NotificationList from './chapter_06/NotificationList';
import Counter from './Counter';
import FocusButton from './chapter_07/FocusButton';
import Midterm from './Test/midterm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
  </header>*/}
      <midterm/>
    </div>
  );
}

export default App;
