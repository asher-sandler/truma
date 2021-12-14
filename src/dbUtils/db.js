// **************************************************** //
export async function getConfigData(fname, onDataLoad){
	const url = window.location.origin+fname; // "/data/resume.json";
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	onDataLoad(data);
	return data;
}
// **************************************************** //
export async function getGoogleTable( onDataLoad){
	// const url = 'https://spreadsheets.google.com/feeds/list/1tb78VZXh0Qwb23frGfbTfyj_259Epo3OiQgLdgbM-jM/od6/public/values?alt=json'; // "/data/resume.json";
	const googleSheet = "https://spreadsheets.google.com/feeds/list/1tb78VZXh0Qwb23frGfbTfyj_259Epo3OiQgLdgbM-jM/";
	const googleSuffix =  "/public/values?alt=json"
	let currentDaf = "1"
	let url = googleSheet + currentDaf + googleSuffix; 
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	
	currentDaf = data.feed.entry[0].gsx$currentdaf['$t']
	//console.log('Daf', currentDaf);
	
	
	if (currentDaf !== "1")
	{
		
		let url = googleSheet + currentDaf + googleSuffix; 
		
		console.log(url);
		const response = await fetch(url);
		const dta1 = await response.json();
		console.log(dta1);
		onDataLoad(dta1);				
	}
	else
	{
		onDataLoad(data);		
	}		

	

	return data;
}
// **************************************************** //
export async function getTrumaTable( onDataLoad){
	// const url = 'https://spreadsheets.google.com/feeds/list/1tb78VZXh0Qwb23frGfbTfyj_259Epo3OiQgLdgbM-jM/od6/public/values?alt=json'; // "/data/resume.json";
	
	const trumaTable = "https://spreadsheets.google.com/feeds/list/1G1jbWnthjTNbqGlULWhJN4xmjZwodPN9z6U8QXcA6CU/";
	//const googleSheet = "https://spreadsheets.google.com/feeds/list/1tb78VZXh0Qwb23frGfbTfyj_259Epo3OiQgLdgbM-jM/";
	const googleSuffix =  "/public/values?alt=json"
	let currentDaf = "1"
	let url = trumaTable + currentDaf + googleSuffix; 
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	console.log("TrumaTable: ",data.feed.entry);
	
	// currentDaf = data.feed.entry[0].gsx$currentdaf['$t']
	//console.log('Daf', currentDaf);
	onDataLoad(data);	
/*	
	if (currentDaf !== "1")
	{
		
		let url = googleSheet + currentDaf + googleSuffix; 
		
		console.log(url);
		const response = await fetch(url);
		const dta1 = await response.json();
		console.log(dta1);
		onDataLoad(dta1);				
	}
	else
	{
	
	}		
*/
	

	return data;
}
// **************************************************** //
export async function getLangData(lang, onDataLoad){
	const url = '/lang/'+lang+'.json'; // "/data/resume.json";
	//console.log(url);
	const response = await fetch(url);
	const data = await response.json();
	//console.log(data);
	//console.log(data["en"]);
	//console.log(data["en"]["strings"].findIndex(string => string.name === "ASHEM ELOKEINU"));	
	
	onDataLoad(data);
	return data;
}
// **************************************************** //



