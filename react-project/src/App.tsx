import "./App.css";
import reactSVG from "./assets/react.svg";

function App() {
  return (
    <div className="container">
      <h2 style={{ color: "black" }}>Welcome to</h2>
      <h1 style={{ color: "black" }}>React for Beginners</h1>
      <img src={reactSVG}></img>
    </div>
  );
}

export default App;
