import './App.css';
import React,{ Component } from 'react';
//import { useState } from 'react';
import Sun from './components/sun';
import Nightsky from './components/nightsky';
import Clouds from './components/clouds';
import Rain from './components/rain.js';
import Vapour from './components/vapour';
import Moreclouds from './components/moreclouds';
import Precipitation from './components/perciptation';
import Condensation from './components/condensation';

class App extends Component {
  constructor(){
    super();
  this.state = {
    Sun : true ,
    Nightsky :false,
    Clouds:true,
    Rain:false,
    Vapour : false,
    Moreclouds:false,
    Precipitation:false,
    Condensation:false,
 }
}
evp() {
 this.setState({Sun: true});
 this.setState({Vapour:true});
 this.setState({Nightsky:false});
 this.setState({Rain:false});
 this.setState({Clouds:true});
 this.setState({moreclouds:false});
 this.setState({Precipitation:false});
 this.setState({Condensation:false});

}
cnd() {
  this.setState({Vapour:false});
  this.setState({Moreclouds:true});
  this.setState({Precipitation:false});
  this.setState({Condensation:true});
 }
 prcp() {
  this.setState({Rain:true});
  this.setState({Vapour:false});
  this.setState({Moreclouds:false});
  this.setState({Precipitation:true});
  this.setState({Condensation:false});

 }
 nyt(){
  this.setState({Nightsky:true});
  this.setState({Sun: false});
  this.setState({Daysky:false});
  this.setState({Vapour:false});
 }
 day(){
  this.setState({Nightsky:false});
  this.setState({Daysky:true});
  this.setState({Sun:true});
 }
 rain(){
  this.setState({Rain:true});
  this.setState({Vapour:false});
  this.setState({Condensation:false});

 }
 norain(){
  this.setState({Rain:false});
  this.setState({Moreclouds:false});
  this.setState({Precipitation:false});
  this.setState({Condensation:false});


 }
render() {
  return (
    <div>
      <button onClick={() => this.evp()} className="B2">Evaporation</button>
      <button onClick={() => this.cnd()} className="B2">Condensation</button>
      <button onClick={() => this.prcp()} className="B2">Precipitation</button>
      <button onClick={() => this.nyt()} className="B2">Night</button>
      <button onClick={() => this.day()} className="B2">Day</button>
      <button onClick={() => this.rain()} className="B2">Rain</button>
      <button onClick={() => this.norain()} className="B2">Stop Rain</button>
      {
          this.state.Sun ? <Sun /> : null
      } 
      {
          this.state.Nightsky ? <Nightsky /> : null
      } 
       {
          this.state.Clouds ? <Clouds /> :null
      }
      {
          this.state.Vapour ? <Vapour /> :null
      }
      {
          this.state.Rain ? <Rain /> :null
      }
      {
          this.state.Moreclouds ? <Moreclouds /> :null
      }
      {
          this.state.Precipitation ? <Precipitation /> :null
      }
       {
          this.state.Condensation ? <Condensation /> :null
      }
      </div>
      
  );
}
}

export default App;
