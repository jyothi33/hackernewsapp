import Story from "./components/Story";
import "./App.css";
function App() {
  return (
    <div className="app" data-test="app">
      <h1>The News Time</h1>
      <Story />
    </div>
  );
}

export default App;
