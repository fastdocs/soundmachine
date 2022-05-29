const getFile = (fileName: string) =>
	require(`../soundfiles/sounds/${fileName}.mp3`);
export default getFile;
