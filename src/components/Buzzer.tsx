import { v4 as uuidv4 } from "uuid";

interface BuzzerProps {
  title: string;
  soundFile: any;
}

const Buzzer = ({ title, soundFile }: BuzzerProps) => {
  const id = uuidv4();
  function play() {
    const audioFile = document.getElementById(id) as HTMLAudioElement;
    audioFile?.play();
  }
  return (
    <div>
      <audio controls id={id} style={{ display: "none" }}>
        <source src={soundFile} type="audio/mpeg" />
      </audio>
      <button onClick={() => play()}>{title}</button>
    </div>
  );
};

export default Buzzer;
