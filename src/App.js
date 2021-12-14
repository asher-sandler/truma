import React from 'react';
import Desktop from './DeskTop/Main/main.js';
import Mobile from './Mobile/Main/main.js';
import { getLangData, getTrumaTable} from './dbUtils/db.js';
import {numProps, filterData, borderDates} from './Utils/Utils.js';

//import {getConfigData} from './dbUtils/db.js';
import './App.css';

//import * as fs from 'fs';

//const mongoose = require("mongoose");
//const { Schema, connect } = require("mongoose");


class  App extends React.Component {
  constructor(props) {
		//#region Asher.DataSet dddd
        super(props);
        this.state = {
            isOpen: false,
            width: window.innerWidth,
            
            lhkbh   : "בס''ד",

            
            user : null,  
            password: null,
            port: null,
            mongoDBURL : null,
            

            version : "2020-05-05",
            developer : "Charity! Asher Malkiel Sandler <asher.sandler770@gmail.com>",
			direction : "rtl",
			slidesCount : 11,
			dateBeg    : undefined,
			dateUntil  : undefined,
			summWanted : undefined,
			summHarvested : undefined,
			langArray    : undefined,
			tormimPerson : undefined,
			tormimCount  : 0,
			procent		 : 0	
			
        }

        //getConfigData('/data/config.json',this.onLoadConfig);
		
		getTrumaTable(this.onLoadTruma);
		
		//getGoogleTable(this.onLoadGoogleTable);
		
		
		getLangData('en',this.onLoadLang);
		
       

        //this.expressConnect();
   
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    let elem = document.getElementById('root');
	elem.style.direction=this.state.direction;
	
	


}

componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);

}

  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth});
}


onLoadConfig = (data) => {
  this.setState({user: data.user,
                    port: data.port,
                    password: data.password,
                    mongoDBURL : data.mongodburl,
					dateUntil  : data.dateUntil,
					summWanted : data.summWanted,
					summHarvested : data.summHarvested 
			
					
  })
}
onLoadTruma = (data) => {
	let conf = data.feed.entry[0];
	let dBeg    = conf.gsx$datebeg['$t'];
	let dUntil  = conf.gsx$dateend['$t'];
	let sWant   = conf.gsx$summwanted['$t'];
	let sHarv   = conf.gsx$summraised['$t'];
	let proc    = parseFloat(conf.gsx$progressproc['$t']);
	let bDates  = {beg: borderDates(dBeg),end: borderDates(dUntil) };
	let oTormim = data.feed.entry.filter(elem => (filterData(elem, bDates))).reverse();	
	
	
	this.setState({
			dateBeg       : dBeg,
			dateUntil     : dUntil,
			borderDates   : bDates,
			summWanted    : sWant,
			summHarvested : sHarv,
			tormimPerson  : oTormim,	
			tormimCount  :  numProps(oTormim),
			procent      : 	proc
	})	
}	
/*

DateBeg	DateEnd	summWanted	summRaised	ProgressProc
gsx$address: {$t: "הרימון 5/1"}
gsx$approvednumber: {$t: "0087676*"}
gsx$cardnumb: {$t: "3883*"}
gsx$city: {$t: "5.1"}
gsx$compaign: {$t: "5"}
gsx$country: {$t: ""}
gsx$datebeg: {$t: "2020-06-01 10:00"}
gsx$dateend: {$t: "2020-10-15 10:00"}
gsx$email: {$t: ""}
gsx$familyname: {$t: "טלי"}
gsx$gmid: {$t: "16b60d1abfb9fa91"}
gsx$id: {$t: "0"}
gsx$includeincount: {$t: "Yes"}
gsx$name: {$t: "ארגמן"}
gsx$note: {$t: "תשלום עבור הקייטנה ,לשלוח קבלה למייל המצורף בטופס"}
gsx$paycounts: {$t: "2"}
gsx$paydate: {$t: "16.06.2019 18:04"}
gsx$permanentpayment: {$t: "לא"}
gsx$phone: {$t: ""}
gsx$progressproc: {$t: "166.50"}
gsx$realname: {$t: "ארגמן טלי"}
gsx$sentfrom: {$t: "a037630543@gmail.com"}
gsx$showonsite: {$t: "Yes"}
gsx$summ: {$t: "1300"}
gsx$summraised: {$t: "333005"}
gsx$summwanted: {$t: "200000"}
gsx$teudatzeut: {$t: ""}
gsx$zipcode: {$t: ""}
*/	
	

/*
onLoadGoogleTable = (data) => {
	let conf = data.feed.entry[0];
	//console.log('Google Table: ', data.feed.entry);
	console.log('Conf Table: ', conf);	
	let dUntil  = conf.gsx$dateuntil['$t'];
	let sWant   = conf.gsx$summwanted['$t'];
	let sHarv   = conf.gsx$summharvested['$t'];
	let proc    = parseFloat(conf.gsx$progressproc['$t']);
	let oTormim = data.feed.entry;
	/*
	let oTormim = Object.entries(data.feed.entry).map(tormim => {
		return {all : tormim[1],
				person :  tormim[1].gsx$name["$t"],
				phone  :  tormim[1].gsx$phone["$t"],
				summ   :  tormim[1].gsx$summ["$t"],
				email  :  tormim[1].gsx$email["$t"],
				address:  tormim[1].gsx$address["$t"]}
	})
	*/
	
	
	//console.log(dUntil,sWant,sHarv);
/*	
	this.setState({
			dateUntil     : dUntil,
			summWanted    : sWant,
			summHarvested : sHarv,
			tormimPerson  : oTormim,	
			tormimCount  :  numProps(oTormim),
			procent      : 	proc
	})
}
*/

onLoadLang = (data) => {
	
	this.setState(
	{langArray : data}
	);
	//console.log('Lang: ', data);
	//console.log('Lang strings: ', data.strings);
	
	//console.log('Lang strings S003: ', new Map(data.strings[0]));
	
	
}
/*
 expressConnect = async () =>{
  
  try{
     connect(this.state.mongoDBURL, {
      useNewUrlParser:true
    });
  
  }
  catch (e)
  {
    console.log('Server Error', e.message)
    //process.exit(1);
  }
  }
  
*/
  render(){
    const {width} = this.state;
    const isMobile = width <= 700;

    
    if (isMobile){
          return (
            <Mobile user={this.state.user} dir={this.state.direction} 
				slidesCount   = {this.state.slidesCount} 
				dateBeg       = {this.state.dateBeg}
				dateUntil     = {this.state.dateUntil}
				summWanted    = {this.state.summWanted}
				summHarvested = {this.state.summHarvested}
				langArray	  = {this.state.langArray}
				tormimPerson  = {this.state.tormimPerson}
				tormimCount   = {this.state.tormimCount}
				procent       = {this.state.procent}
				/>
          )
    }
    else
    {
          return (
          <Desktop  user={this.state.user} dir={this.state.direction} 
				slidesCount   = {this.state.slidesCount}
				dateBeg       = {this.state.dateBeg}	
				dateUntil     = {this.state.dateUntil}
				summWanted    = {this.state.summWanted}
				summHarvested = {this.state.summHarvested}
				langArray	  = {this.state.langArray}
				tormimPerson  = {this.state.tormimPerson}
				tormimCount   = {this.state.tormimCount}
				procent       = {this.state.procent}				
				/>
          )
    }
  
   }
}

export default App;
