import { XCircle } from "phosphor-react";
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
			<main className="grid">
				<div className="sticky top-0">
					<input
						type="text"
						inputMode="search"
						placeholder="Sounds durchsuchen"
						className="appearance-none w-full p-4 lg:px-8 lg:py-6 rounded-none border-b text-slate-500 dark:text-slate-400 dark:placeholder:text-slate-500 font-semibold border-slate-300 bg-slate-100 dark:bg-slate-700 dark:border-slate-800 text-base focus-visible:outline-none"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>

					{search && (
						<XCircle
							weight="fill"
							size={16}
							className="absolute right-0 top-0 m-5 lg:mx-9 lg:my-7 text-slate-500 dark:text-slate-400"
							onClick={() => setSearch("")}
						/>
					)}
				</div>

				{sounds.map((category, i) => {
					return (
						<div className="grid p-4 lg:p-8 gap-4" key={i}>
							<h2 className="font-bold text-slate-500 dark:text-slate-400">
								{category.categoryTitle}
							</h2>

							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
								{category.sounds.map((sound, i) => {
									return (
										<Buzzer
											title={sound.title}
											soundFile={sound.file}
											key={i}
										/>
									);
								})}
							</div>
						</div>
					);
				})}

				{/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-8">
					{sounds.map((sound, i) => {
						return (
							<Buzzer title={sound.title} soundFile={sound.file} key={i} />
						);
					})}
				</div> */}

				<div className="text-center p-8 text-slate-500">
					<small>
						<b>
							Made with 💙 by{" "}
							<a href="https://www.fastdocs.de" className="underline">
								Fastdocs
							</a>
						</b>

						<ul className="flex flex-col gap-2 md:flex-row justify-center mt-2">
							<li>
								<a
									href="https://www.linkedin.com/company/fastdocs-de-gmbh"
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/fastdocs.de/"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://www.facebook.com/fastdocs.de/"
									target="_blank"
									rel="noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/channel/UCR-_bM4vCpftNKvYA3q9GjA/featured"
									target="_blank"
									rel="noreferrer"
								>
									Youtube
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/fastdocsDE"
									target="_blank"
									rel="noreferrer"
								>
									Twitter
								</a>
							</li>
						</ul>
					</small>
				</div>
			</main>
		</>
	);
}

export default BuzzerBoard;
