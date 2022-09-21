import getFile from "../utility/getFile";

type SoundCategory = {
	title: string;
	sounds: Sounds[];
};

type Sounds = {
	title: string;
	file: void;
};

const sounds: SoundCategory[] = [
	{
		title: "LKW Ali",
		sounds: [
			{
				title: "Warum Straße!?",
				file: getFile("lkw-ali/warum-strasse"),
			},
			{
				title: "Besser su hause bleiben!",
				file: getFile("lkw-ali/besser-zu-hause"),
			},
			{
				title: "Verpiss dik!",
				file: getFile("lkw-ali/verpiss-dik"),
			},
		],
	},
	{
		title: "Krankplatz Ronny",
		sounds: [
			{
				title: "Die Scheiße",
				file: getFile("krankplatz-ronny/die-scheisse"),
			},
			{
				title: "Kein Lust oder wat!?",
				file: getFile("krankplatz-ronny/keine-lust"),
			},
			{
				title: "Nach Hause gehen",
				file: getFile("krankplatz-ronny/nach-hause"),
			},
			{
				title: "Zu dumm?",
				file: getFile("krankplatz-ronny/zu-dumm"),
			},
			{
				title: "Nichts-Könner",
				file: getFile("krankplatz-ronny/nichts-koenner"),
			},
			{
				title: "Es reicht langsam!",
				file: getFile("krankplatz-ronny/es-reicht-langsam"),
			},
			{
				title: "Kein Bandmaß!?",
				file: getFile("krankplatz-ronny/kein-bandmass"),
			},
		],
	},
	{
		title: "Wolle Marco",
		sounds: [
			{
				title: "5G brauchen wir!",
				file: getFile("wolle-marco/5G"),
			},
			{
				title: "Chai Latte",
				file: getFile("wolle-marco/chai_latte"),
			},
			{ title: "Es lassen", file: getFile("wolle-marco/es_lassen") },
			{
				title: "Dat gleiche Feld",
				file: getFile("wolle-marco/dat_gleiche_feld"),
			},
			{
				title: "Ich brauche Platz!",
				file: getFile("wolle-marco/ich_brauche_platz"),
			},
		],
	},
	{
		title: "Bitconnect",
		sounds: [
			{
				title: "Bitconnect (No No No)",
				file: getFile("bitconnect/Bitconnect_No_No"),
			},
			{
				title: "Bitconnect (Waz Up)",
				file: getFile("bitconnect/WazUp"),
			},
			{
				title: "Bitconnect (Hey hey)",
				file: getFile("bitconnect/heyhey"),
			},
		],
	},
	{
		title: "Fußball Misc",
		sounds: [
			{
				title: "CR7 (Siuu)",
				file: getFile("fussball-misc/cr7_siuu"),
			},
			{
				title: "Woran hat et jelegen?",
				file: getFile("fussball-misc/woran-hats-gelegen"),
			},
		],
	},
	{
		title: "Misc",
		sounds: [
			{
				title: "Schöne Markenlaptop",
				file: getFile("misc/markenlaptop"),
			},
			{
				title: "Ich muss raus",
				file: getFile("misc/ich-muss-raus"),
			},
			{
				title: "Ich hab ganis gemakt",
				file: getFile("misc/ich_hab_ganis_gemakt"),
			},
			{
				title: "Nicht so tief Rüdiger",
				file: getFile("misc/nicht-so-tief-rudiger"),
			},
			{
				title: "Okay let's go",
				file: getFile("misc/okay-lets-go"),
			},
			{
				title: "TS - User disconnected",
				file: getFile("misc/teamspeak-disconnect"),
			},
			{
				title: "Uwe ist auch dabei",
				file: getFile("misc/ich-bin-der-uwe-ich-bin-auch-dabei"),
			},
			{
				title: "Was ist mit Karsten los",
				file: getFile("misc/was-ist-denn-mit-karsten-los"),
			},
			{
				title: "Risiken und Nebenwirkungen",
				file: getFile("misc/zu-risiken-und-nebenwirkungen"),
			},
			{
				title: "Do u speak germany?",
				file: getFile("misc/do-you-speak-germany"),
			},
			{
				title: "Nice!",
				file: getFile("misc/click-nice"),
			},
			{
				title: "Computer sagt NEIN",
				file: getFile("misc/computer-sagt-nein"),
			},
			{
				title: "There is the flavour!",
				file: getFile("misc/fuckin-flavour"),
			},
			{
				title: "Psycho Violine",
				file: getFile("misc/psycho-violine"),
			},
			{
				title: "Merkel du Fresse",
				file: getFile("misc/angela-merkel-du-fresse"),
			},
			{
				title: "Shisha soll auf sein!",
				file: getFile("misc/shisha-soll-auf-sein"),
			},
		],
	},
	{
		title: "Jingles",
		sounds: [
			{
				title: "Wer wird Millionär",
				file: getFile("jingles/wer-wird-millionar"),
			},
			{
				title: "Wartemusik",
				file: getFile("jingles/wartemusik-trompete"),
			},
			{
				title: "Der Looser",
				file: getFile("jingles/einer-ist-immer-der-loser"),
			},
			{
				title: "Feierabend wie das duftet...",
				file: getFile("jingles/feierabend-pommersche"),
			},
		],
	},
	{
		title: "Christian Streich",
		sounds: [
			{
				title: "Mo. zu Mit.",
				file: getFile("christian-streich/mon-zu-mit"),
			},
			{
				title: "So. zu Di.",
				file: getFile("christian-streich/Son-zu-die"),
			},
			{
				title: "Fr. Do. Sa.",
				file: getFile("christian-streich/fre-don-sam"),
			},
			{
				title: "Heute ruhig",
				file: getFile("christian-streich/heute-ruhig"),
			},
			{
				title: "Verstehen Sie?",
				file: getFile("christian-streich/verstehen-sie"),
			},
		],
	},
	{
		title: "Robert",
		sounds: [
			{
				title: "Abitur",
				file: getFile("robert-geiss/abitur"),
			},
			{
				title: "Ende aus",
				file: getFile("robert-geiss/ende-aus-nikolaus"),
			},
			{
				title: "Ernste Lage",
				file: getFile("robert-geiss/ernste-lage"),
			},
			{
				title: "Ha, ha, ha",
				file: getFile("robert-geiss/ha-ha-ha"),
			},
			{
				title: "Prost!",
				file: getFile("robert-geiss/prost"),
			},
			{
				title: "Regeln befolgen!",
				file: getFile("robert-geiss/regeln-befolgen"),
			},
			{
				title: "Ski-Urlaub abgesagt",
				file: getFile("robert-geiss/ski-urlaub-abgesagt"),
			},
			{
				title: "Spaghetti Carbonara",
				file: getFile("robert-geiss/spaghettie-carbonara"),
			},
		],
	},
];

export default sounds;
