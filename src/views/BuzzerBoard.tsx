import { useEffect, useState } from "react";
import Buzzer from "../components/Buzzer";
import sounds from "../soundfiles/index";

function BuzzerBoard() {
	let [search, setSearch] = useState("");

	const searchForSound = () => {
		const buttons = document.querySelectorAll("main button");

		const hideAllButton = () => {
			buttons.forEach((button) => {
				const element = button as HTMLButtonElement;
				return (element.style.display = "none");
			});
		};

		const showAllButtons = () => {
			buttons.forEach((button) => {
				const element = button as HTMLButtonElement;
				return (element.style.display = "block");
			});
		};

		const showFilteredButtons = () => {
			buttons.forEach((button) => {
				const element = button as HTMLButtonElement;
				const elementTitle = button.textContent;

				if (elementTitle?.toLowerCase().includes(search.toLowerCase())) {
					return (element.style.display = "block");
				}
			});
		};

		if (search) {
			hideAllButton();
			return showFilteredButtons();
		}

		return showAllButtons();
	};

	useEffect(() => {
		searchForSound();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search]);

	return (
		<>
			<main className="grid gap-4 p-8 lg:p-16">
				<input
					type="search"
					placeholder="Sounds durchsuchen"
					className="w-full p-4 border-2 rounded-md text-base bg-slate-50"
					onChange={(e) => setSearch(e.target.value)}
				/>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
					{sounds.map((sound, i) => {
						return (
							<Buzzer title={sound.title} soundFile={sound.file} key={i} />
						);
					})}
				</div>
			</main>
		</>
	);
}

export default BuzzerBoard;
