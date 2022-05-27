import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface BuzzerProps {
	title: string;
	soundFile: any;
}

const Buzzer = ({ title, soundFile }: BuzzerProps) => {
	const id = uuidv4();

	function play() {
		const audioFile = document.getElementById(id) as HTMLAudioElement;
		audioFile.play();
	}

	return (
		<button onClick={() => play()} className="button text-sm">
			<div>
				<span>{title}</span>
			</div>

			<audio id={id} className="hidden">
				<source src={soundFile} type="audio/mpeg" />
			</audio>
		</button>
	);
};

export default Buzzer;
