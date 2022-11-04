const getFile = (fileName: string) =>
	require(`../soundfiles/sounds/${fileName}.mp3`) as string;
export default getFile;
