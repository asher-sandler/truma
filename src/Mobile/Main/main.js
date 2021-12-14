import React from 'react';
import './main.css';
import Navbar from '../Navbar/Navbar.js';
import Aim from '../Aim/Aim.js';
import PBar from '../ProgressBar/PBar.js';
import CountDown from '../CountDown/CountDown.js';
import PayModule from '../PayModule/PayModule';
import YouTube from '../YouTube/YouTube';
import LargeCarousel from '../Carousel/LargeCarousel';
import Donators from '../PanelDonators/Donators.js';
import Footer from '../Footer/Footer';
//import HabadRamot from '../HabadRamot/HabadRamot.js';
import BannerRamot from '../BannerRamot/BannerRamot.js';


import {getYouTube} from '../../Utils/Utils.js';

class Mobile extends React.Component {
//  Mobile
render(){
			let ytube =  getYouTube("https://www.youtube.com/watch?v=1SMjTMuTpoY");
    return(
    <div>
		<div className="mobile">
			<div className="wrapper">
			    <Navbar dir={this.props.dir}/>
				<Aim dir={this.props.dir}
					summWanted    = {this.props.summWanted}
					summHarvested = {this.props.summHarvested}
					timeTillDate={this.props.dateUntil}
				/>				
				<CountDown timeTillDate={this.props.dateUntil}  dir={this.props.dir}/>				
				<PBar dir={this.props.dir}
					summWanted    = {this.props.summWanted}
					summHarvested = {this.props.summHarvested}	
					procent		  = {this.props.procent}
					timeTillDate  = {this.props.dateUntil}					
				/>

				<LargeCarousel slidesCount={this.props.slidesCount} dir={this.props.dir}/>
				{/*
				<HabadRamot />
				*/}
				<BannerRamot />
				
				
				<PayModule dir={this.props.dir} />
				
				<Donators dir={this.props.dir} 
				dateBeg       = {this.props.dateBeg}
				dateUntil     = {this.props.dateUntil}
				tormimPerson  = {this.props.tormimPerson}
				tormimCount   = {this.props.tormimCount}	
				/>
				
				/*
				<YouTube dir={this.props.dir} youtube={ytube}/>
				*/
				
				

				
				
				
				<Footer dir={this.props.dir}/>
				
				
				
			</div>
		</div>
	</div>		
    )
}
}

export default Mobile;