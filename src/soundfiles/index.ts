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
		title: "Kir Royal",
		sounds: [
			{
				title: "Ich kauf Dich einfach",
				file: getFile("kir-royal/01-ich-kauf-dich-einfach"),
			},
			{
				title: "Ich kauf Dir ne Villa",
				file: getFile("kir-royal/02-ich-kauf-dir-ne-villa"),
			},
			{
				title: "Nen Ferrarie",
				file: getFile("kir-royal/03-nen-ferrarie"),
			},
			{
				title: "5 Karat für Deine Frau",
				file: getFile("kir-royal/04-jeden-tag-ein-5-karaeter"),
			},
			{
				title: "Hinten und vorne rein",
				file: getFile("kir-royal/05-hinten-und-vorne"),
			},
			{
				title: "Mit geld zuscheißen",
				file: getFile("kir-royal/06-mit-geld-zuscheissen"),
			},
			{
				title: "Jeden Tag Cash",
				file: getFile("kir-royal/07-jeden-tag-cash"),
			},
			{
				title: "Dann hab ich Dich",
				file: getFile("kir-royal/08-dann-hab-ich-dich"),
			},
			{
				title: "Mein Knecht",
				file: getFile("kir-royal/09-mein-knecht"),
			},
			{
				title: "Ich mach, was ich will",
				file: getFile("kir-royal/10-ich-mach-mit-dir-was-ich-will"),
			},
			{
				title: "Ich bin Dir über",
				file: getFile("kir-royal/11-ich-bin-dir-ueber"),
			},
			{
				title: "Keine Chance",
				file: getFile("kir-royal/12-keine-chance"),
			},
			{
				title: "Begreifst Du nicht?",
				file: getFile("kir-royal/13-begreifst-du-nicht"),
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
				title: "Meine Nuggets verbrennen",
				file: getFile("misc/nuggets-verbrennen"),
			},
			{
				title: "Wallah Krise!",
				file: getFile("misc/wallah-krise"),
			},
			{
				title: "Canabis reicht nicht",
				file: getFile("misc/canabis-reicht-nicht"),
			},
			{
				title: "Es braucht Kokain und Crystal",
				file: getFile("misc/kokain-und-crystal"),
			},
			{
				title: "Erbärmliches Paket",
				file: getFile("misc/erbaermliches-paket"),
			},
			{
				title: "Lieber saufen als Arbeit",
				file: getFile("misc/lieber-saufen-als-arbeit"),
			},
			{
				title: "I doubt it",
				file: getFile("misc/i-doubt-it"),
			},
			{
				title: "Nadine geht rauchen",
				file: getFile("misc/nadine-geht-rauchen"),
			},
			{
				title: "A few moments later",
				file: getFile("misc/a-few-moments-later"),
			},
			{
				title: "Bomb has been planted",
				file: getFile("misc/bomb-has-been-planted"),
			},
			{
				title: "He fucked up",
				file: getFile("misc/he-fucked-up"),
			},
			{
				title: "Haut Euch in die Fresse",
				file: getFile("misc/in-die-fresse"),
			},
			{
				title: "Nein, Doch, Ohh",
				file: getFile("misc/nein-doch-ohh"),
			},
			{
				title: "Trollolo",
				file: getFile("misc/trollolol"),
			},
			{
				title: "Was machen sachen?",
				file: getFile("misc/was-machen-sachen"),
			},
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
				title: "Here comes the Money",
				file: getFile("jingles/money"),
			},
			{
				title: "Friday drinking",
				file: getFile("jingles/its-friday"),
			},
			{
				title: "CGN Airport",
				file: getFile("jingles/airportbell-cgn"),
			},
			{
				title: "Epic Sax Guy",
				file: getFile("jingles/epic-saxmen"),
			},
			{
				title: "Erika - Soldaten",
				file: getFile("jingles/erika"),
			},
			{
				title: "Mission Impossible",
				file: getFile("jingles/mission-impossible"),
			},
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
