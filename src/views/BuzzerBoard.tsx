import Buzzer from "../components/Buzzer";
import sounds from "../sounds";

function BuzzerBoard() {
	return (
		<main className="grid grid-cols-4 gap-12 p-24">
			{sounds.map((sound, i) => {
				return <Buzzer title={sound.title} soundFile={sound.file} key={i} />;
			})}
		</main>
	);
}

export default BuzzerBoard;
