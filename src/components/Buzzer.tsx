interface BuzzerProps {
	title: string;
	soundFile: string;
	onPlayAudio: (soundFile: string) => void;
}

const Buzzer = ({ title, soundFile, onPlayAudio }: BuzzerProps) => {
	return (
		<button
			onClick={() => onPlayAudio(soundFile)}
			className="button text-sm select-none focus:touch-none"
			data-name="buzzer"
		>
			<div className="w-full">
				<span className="px-4 w-full truncate overflow-x-hidden">{title}</span>
			</div>
		</button>
	);
};

export default Buzzer;
