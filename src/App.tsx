import "./App.css";
import Buzzer from "./components/Buzzer";
import fiveg from "./static/soundfiles/5G.mp3";
import chaiLatte from "./static/soundfiles/chai_latte.mp3";
import esLassen from "./static/soundfiles/es_lassen.mp3";
import datGleicheFeld from "./static/soundfiles/dat_gleiche_feld.mp3";
import ichBrauchePlatz from "./static/soundfiles/ich_brauche_platz.mp3";

function App() {
  return (
    <div className="App">
      <Buzzer soundFile={fiveg} title="5G" />
      <Buzzer soundFile={chaiLatte} title="Chai Latte" />
      <Buzzer soundFile={datGleicheFeld} title="Dat gleiche Feld" />
      <Buzzer soundFile={esLassen} title="Dann können wir es lassen" />
      <Buzzer soundFile={ichBrauchePlatz} title="Ich brauche Platz" />
    </div>
  );
}

export default App;
