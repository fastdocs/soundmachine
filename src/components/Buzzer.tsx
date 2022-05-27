interface BuzzerProps {
  title: string;
  soundFile: any;
  id: string;
}

const Buzzer = ({ title, soundFile, id }: BuzzerProps) => {
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
