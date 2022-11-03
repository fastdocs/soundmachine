import { MagnifyingGlass, XCircle } from "phosphor-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import Buzzer from "../components/Buzzer";
import sounds, { Sounds } from "../soundfiles/index";

function BuzzerBoard() {
	let [search, setSearch] = useState("");

	const filteredList = useMemo(() => {
		if(search === ''){
			return sounds;
		}
		const songNameIncludesPredicate = (soundObj: Sounds) => soundObj.title.toLowerCase().includes(search.toLocaleLowerCase());
		return sounds
			.filter((soundCategory) => soundCategory.sounds.some(songNameIncludesPredicate))
			.map((soundCategory) => { return {...soundCategory, sounds: soundCategory.sounds.filter(songNameIncludesPredicate)}});

	}, [search]);

	return (
		<>
			<main className="grid">
				<div className="flex items-center bg-slate-100 dark:bg-slate-700 sticky top-0 border-b border-slate-300 dark:border-slate-800">
					<MagnifyingGlass
						weight="bold"
						size={16}
						className="absolute lg:ml-8 text-slate-500 dark:text-slate-400 ml-4 pointer-events-none"
					/>

					<input
						type="text"
						inputMode="search"
						placeholder="Sounds durchsuchen"
						className="appearance-none w-full p-4 px-12  bg-slate-100 dark:bg-slate-700 lg:py-6 lg:px-16 rounded-none  text-slate-500 dark:text-slate-400 dark:placeholder:text-slate-500 font-semibold    text-base focus-visible:outline-none"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>

					{search && (
						<button
							onClick={() => setSearch("")}
							className="absolute right-0 top-0 p-5 lg:px-9 lg:py-7 text-slate-500 dark:text-slate-400"
						>
							<XCircle weight="fill" size={16} />
						</button>
					)}
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:p-8">
					{filteredList.map((category, i) => {
						return (
							<Fragment key={i}>
								<h2 className="col-span-full font-bold text-slate-500 dark:text-slate-400 mt-4 first:mt-0">
									{category.title}
								</h2>

								{category.sounds.map((sound, i) => {
									return (
										<Buzzer
											title={sound.title}
											soundFile={sound.file}
											key={i}
										/>
									);
								})}
							</Fragment>
						);
					})}
				</div>
			</main>

			<footer className="text-center p-8 text-slate-500">
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
			</footer>
		</>
	);
}

export default BuzzerBoard;
