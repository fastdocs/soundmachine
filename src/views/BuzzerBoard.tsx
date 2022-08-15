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
				return (element.style.display = "");
			});
		};

		const showFilteredButtons = () => {
			buttons.forEach((button) => {
				const element = button as HTMLButtonElement;
				const elementTitle = button.textContent;

				if (elementTitle?.toLowerCase().includes(search.toLowerCase())) {
					return (element.style.display = "");
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
					type="text"
					inputMode="search"
					placeholder="Sounds durchsuchen"
					className="appearance-none w-full p-3 rounded-none border-b text-slate-500 font-semibold border-slate-300 dark:border-slate-500 text-base bg-transparent focus-visible:outline-none"
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
