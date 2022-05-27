import "./App.css";
import Buzzer from "./components/Buzzer";
import fiveg from "./static/soundfiles/5G.mp3";
import chaiLatte from "./static/soundfiles/chai_latte.mp3";

function App() {
  return (
    <div className="App">
      <Buzzer soundFile={fiveg} title="5G" />
      <Buzzer soundFile={chaiLatte} title="Chai Latte" />
    </div>
  );
}

export default App;
