//import moment from 'moment';
// **************************************************** //
export function mClass(cName,dir)  {
		return (cName+"-"+dir)
}
// **************************************************** //
// slid.href = '//www.youtube.com/embed/'+getYouTubeId(slid.href)+"?autoplay=1";
export function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
// **************************************************** //
export function getYouTube(url){
	
	return ('//www.youtube.com/embed/'+getYouTubeId(url)+"?autoplay=1");
}
// **************************************************** //
export function daysLag(firstDate, lastDay) {
	let ret = 0;
	
	if (lastDay.getTime() > firstDate.getTime())
	{
		ret = (Math.floor(Math.abs(firstDate.getTime() - lastDay.getTime()) / (1000 * 3600 * 24))) ;
	}
	
	return ret;
}
// **************************************************** //

export function hoursLag(firstDate, lastDay) {
	let ret = 0;
	
	if (lastDay.getTime() > firstDate.getTime())
	{
		ret = ((Math.abs(firstDate.getTime() - lastDay.getTime()) ));
		
		ret = Math.floor((ret % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		
	}
	
	//console.log('Hours 24', ret);
	
	return ret;
}

// **************************************************** //

export function mnsLag(firstDate, lastDay) {
	let ret = 0;
	
	if (lastDay.getTime() > firstDate.getTime())
	{
		ret = ((Math.abs(firstDate.getTime() - lastDay.getTime())  )) ;
		
		
		ret = Math.floor((ret % (1000 * 60 * 60)) / (1000 * 60));
	}
	
	//console.log('Mins 24', ret);
	
	return ret;
}
// **************************************************** //

export function secsLag(firstDate, lastDay) {
	let ret = 0;
	
	if (lastDay.getTime() > firstDate.getTime())
	{
		ret = ((Math.abs(firstDate.getTime() - lastDay.getTime()) )) ;
		
		ret = Math.floor((ret % (1000 * 60)) / 1000);
		
	
	}
	
	//console.log('secs 24', ret);
	
	return ret;
}

// **************************************************** //


export function  pad(num, size)  {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
// **************************************************** //

export function formatDate( sdte) {
	
	let ret = ""
	if (sdte !== undefined){
		let dte = new Date(sdte);
		
		let year  = dte.getFullYear();
		let month = pad(dte.getMonth() + 1,2);
		let day   = pad(dte.getDate() ,2);
		let hour  = pad(dte.getHours() ,2);
		let mins  = pad(dte.getMinutes() ,2);
		
		
		ret = day + "."+month+"."+year+", "+hour+":"+mins;
	}
	
	return ret;
}
// **************************************************** //
export function moneyFormat (summ) {
	let ret = ""
	if 	(summ !== undefined){
		ret = new Intl.NumberFormat().format(parseFloat(summ));
	}
	
	return ret;
	
	
}
// **************************************************** //

export function numProps(obj) {
	let c = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) ++c;
	}
	return c;
}
// **************************************************** //
export function isNumber(nValue){
	let ret = false;

	if ((parseFloat(nValue) === "NaN") || 
		(parseFloat(nValue) === "Infinity") ||
		(parseFloat(nValue) === "-Infinity")) 
		
	{
	}
	else if ((typeof parseFloat(nValue) === 'number') && isFinite(parseFloat(nValue)))
	{
		ret=true;
	}		

	return ret;
}
// **************************************************** //
export function borderDates(sdt){
	
	var year  = parseInt((sdt+"").substring(0,4));
	var month = parseInt((sdt+"").substring(5,7))-1;
	var day = parseInt((sdt+"").substring(8,10));

    // console.log(year,month,day);
    
	var chkDt = new Date(year, month, day);
	
	return chkDt;
}
// **************************************************** //
export function payDates(sdt){
	var day = parseInt((sdt+"").substring(0,2));
	var month = parseInt((sdt+"").substring(3,5))-1;
	var year  = parseInt((sdt+"").substring(6,11));
    console.log(year,month,day);    
    var chkDt = new Date(year, month, day);
	return chkDt;
}
// **************************************************** //
export function dateInRange(rangeBeg, rangeEnd, chkDt){
	let ret = false;
	
	let tmCurr = chkDt.getTime();
	let tmFrom = rangeBeg.getTime();
	var tmTo   = rangeEnd.getTime();
		
	if(tmCurr >= tmFrom && tmCurr <= tmTo) {
		ret = true;
	}
	return ret;
}
// **************************************************** //
export function filterData(el,borderDates){
	let payDate = payDates(el.gsx$paydate["$t"]);
	let showOnSite = el.gsx$showonsite["$t"];
	
	let ret = (dateInRange(borderDates.beg,borderDates.end,payDate) && (showOnSite.toLowerCase() !== "no"));
	return ret;
}



