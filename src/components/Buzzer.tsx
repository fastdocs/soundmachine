import fiveg from "../static/soundfiles/5G.mp3";

interface BuzzerProps {
  title: string;
}

const Buzzer = ({ title }: BuzzerProps) => {
  function play() {
    const audioFile = document.querySelector<HTMLAudioElement>("#audio");
    audioFile?.play();
  }
  return (
    <div>
      <audio controls id="audio" style={{ display: "none" }}>
        <source src={fiveg} type="audio/mpeg" />
      </audio>
      <button onClick={() => play()}>{title}</button>
    </div>
  );
};

export default Buzzer;
