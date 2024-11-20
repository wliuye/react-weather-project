import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather />
          <footer>
            This project is created by Wimym Liu Ye and is{" "}
            <a
              href="https://github.com/wliuye/react-weather-project"
              target="_blank">
              open-sourced on GitHub
            </a>
          </footer>
      </div>
    </div>
  );
}

 
