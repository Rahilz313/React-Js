import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Rahils Linkedin Account!!
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rahil-shaikh-072542215/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Visit Our Website
        </a>
      </header>
    </div>
  );
}

export default App;
