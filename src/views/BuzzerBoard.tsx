import Buzzer from "../components/Buzzer";
import sounds from "../soundfiles/index";

function BuzzerBoard() {
	return (
		<main className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 md:16 lg:p-24">
			{sounds.map((sound, i) => {
				return <Buzzer title={sound.title} soundFile={sound.file} key={i} />;
			})}
		</main>
	);
}

export default BuzzerBoard;
