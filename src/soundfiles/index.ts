import getFile from "../utility/getFile";

type SoundCategory = {
	categoryTitle: string;
	sounds: Sounds[];
};

type Sounds = {
	title: string;
	file: void;
};

const sounds: SoundCategory[] = [
	{
		categoryTitle: "Ronny",
		sounds: [
			{
				title: "Die Scheiße",
				file: getFile("die-scheisse"),
			},
			{
				title: "Es reicht langsam!",
				file: getFile("es-reicht-langsam"),
			},
			{
				title: "Kein Bandmaß!?",
				file: getFile("kein-bandmass"),
			},
			{
				title: "Kein Lust oder wat!?",
				file: getFile("keine-lust"),
			},
			{
				title: "Nach Hause gehen",
				file: getFile("nach-hause"),
			},
			{
				title: "Nichts-Könner",
				file: getFile("nichts-koenner"),
			},
			{
				title: "Zu dumm?",
				file: getFile("zu-dumm"),
			},
		],
	},
	{
		categoryTitle: "LKW-Ali",
		sounds: [
			{
				title: "Besser su hause bleiben!",
				file: getFile("besser-zu-hause"),
			},
			{
				title: "Warum Straße!?",
				file: getFile("warum-strasse"),
			},
			{
				title: "Verpiss dik!",
				file: getFile("verpiss-dik"),
			},
		],
	},
	{
		categoryTitle: "Wolle Marco",
		sounds: [
			{
				title: "5G brauchen wir!",
				file: getFile("5G"),
			},
			{
				title: "Chai Latte",
				file: getFile("chai_latte"),
			},
			{ title: "Es lassen", file: getFile("es_lassen") },
			{
				title: "Dat gleiche Feld",
				file: getFile("dat_gleiche_feld"),
			},
			{
				title: "Ich brauche Platz!",
				file: getFile("ich_brauche_platz"),
			},
		],
	},
	{
		categoryTitle: "Bitconnect",
		sounds: [
			{
				title: "Bitconnect (No No No)",
				file: getFile("Bitconnect_No_No"),
			},
			{
				title: "Bitconnect (Waz Up)",
				file: getFile("WazUp"),
			},
			{
				title: "Bitconnect (Hey hey)",
				file: getFile("heyhey"),
			},
		],
	},
	{
		categoryTitle: "Fußball Misc",
		sounds: [
			{
				title: "CR7 (Siuu)",
				file: getFile("cr7_siuu"),
			},
			{
				title: "Woran hat et jelegen?",
				file: getFile("woran-hats-gelegen"),
			},
		],
	},
	{
		categoryTitle: "Misc",
		sounds: [
			{
				title: "Ich muss raus",
				file: getFile("ich-muss-raus"),
			},
			{
				title: "Ich hab ganis gemakt",
				file: getFile("ich_hab_ganis_gemakt"),
			},
			{
				title: "Nicht so tief Rüdiger",
				file: getFile("nicht-so-tief-rudiger"),
			},
			{
				title: "Okay let's go",
				file: getFile("okay-lets-go"),
			},
			{
				title: "TS - User disconnected",
				file: getFile("teamspeak-disconnect"),
			},
			{
				title: "Uwe ist auch dabei",
				file: getFile("ich-bin-der-uwe-ich-bin-auch-dabei"),
			},
			{
				title: "Was ist mit Karsten los",
				file: getFile("was-ist-denn-mit-karsten-los"),
			},
			{
				title: "Risiken und Nebenwirkungen",
				file: getFile("zu-risiken-und-nebenwirkungen"),
			},
			{
				title: "Do u speak germany?",
				file: getFile("do-you-speak-germany"),
			},
			{
				title: "Nice!",
				file: getFile("click-nice"),
			},
			{
				title: "Computer sagt NEIN",
				file: getFile("computer-sagt-nein"),
			},
			{
				title: "There is the flavour!",
				file: getFile("fuckin-flavour"),
			},
			{
				title: "Psycho Violine",
				file: getFile("psycho-violine"),
			},
			{
				title: "Merkel du Fresse",
				file: getFile("angela-merkel-du-fresse"),
			},
			{
				title: "Shisha soll auf sein!",
				file: getFile("shisha-soll-auf-sein"),
			},
		],
	},
	{
		categoryTitle: "Jingles",
		sounds: [
			{
				title: "Wer wird Millionär",
				file: getFile("wer-wird-millionar"),
			},
			{
				title: "Wartemusik",
				file: getFile("wartemusik-trompete"),
			},
			{
				title: "Der Looser",
				file: getFile("einer-ist-immer-der-loser"),
			},
			{
				title: "Feierabend wie das duftet...",
				file: getFile("feierabend-pommersche"),
			},
		],
	},
	{
		categoryTitle: "Christian Streich",
		sounds: [
			{
				title: "Mo. zu Mit.",
				file: getFile("mon-zu-mit"),
			},
			{
				title: "So. zu Di.",
				file: getFile("Son-zu-die"),
			},
			{
				title: "Fr. Do. Sa.",
				file: getFile("fre-don-sam"),
			},
			{
				title: "Heute ruhig",
				file: getFile("heute-ruhig"),
			},
			{
				title: "Verstehen Sie?",
				file: getFile("verstehen-sie"),
			},
		],
	},
	{
		categoryTitle: "Robert",
		sounds: [
			{
				title: "Abitur",
				file: getFile("abitur"),
			},
			{
				title: "Ende aus",
				file: getFile("ende-aus-nikolaus"),
			},
			{
				title: "Ernste Lage",
				file: getFile("ernste-lage"),
			},
			{
				title: "Ha, ha, ha",
				file: getFile("ha-ha-ha"),
			},
			{
				title: "Prost!",
				file: getFile("prost"),
			},
			{
				title: "Regeln befolgen!",
				file: getFile("regeln-befolgen"),
			},
			{
				title: "Ski-Urlaub abgesagt",
				file: getFile("ski-urlaub-abgesagt"),
			},
			{
				title: "Spaghetti Carbonara",
				file: getFile("spaghettie-carbonara"),
			},
		],
	},
];

export default sounds;
