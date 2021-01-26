import React, { Component } from 'react';
import '../Button.css';
import './Generate.css';
import Challenge from '../Data/Challenge.json';
import Fonts from '../Data/Fonts.json';
import Schemes from './Schemes';

export default class Generate extends Component {
    constructor(props){
        super(props);

        this.state = this.randomNumber();

        this.refresh = this.refresh.bind(this);
        this.onClickChallenge = this.onClickChallenge.bind(this);
        this.onClickFont = this.onClickFont.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onClickLibrary = this.onClickLibrary.bind(this);
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max-min+1)) +min;
    }
    randomNumber() {
        let num1 = this.generateRandomNumber(0, 99);
        let num3 = this.generateRandomNumber(0, 4);
        let fnum1 = this.generateRandomNumber(0, 4);
        let fnum2 = this.generateRandomNumber(0, 4);
        let fetchurl = 'http://colormind.io/api/';
        let suffle = {
            num1: num1,
            num3: num3,
            fnum1: fnum1,
            fnum2: fnum2,
            fetchurl: fetchurl,
            colorPalette:[],
        }
        return suffle;
    }
    refresh() {
        this.onClickChallenge();
        this.onClickFont();
        this.onClickLibrary();
        this.componentDidMount();
        
    }
    async componentDidMount(){
        const request = await fetch(this.state.fetchurl, {
            method: 'POST',
            body: JSON.stringify({
              model: 'default'
            })
          })
            .then(result => result.json())
            .catch(console.log)
            this.setState({colorPalette: request.result});
            return(request);        
    }
    
    onClickChallenge(){
        let num1 = this.generateRandomNumber(0, 99);
        this.setState({num1: num1});
    }
    onClickFont(){
        let fnum1 = this.generateRandomNumber(0, 15);
        let fnum2 = this.generateRandomNumber(0, 15);
        if(fnum1 === fnum2 && fnum2 === 15){
            fnum2 = fnum2--;
            this.setState({fnum2: fnum2});
        }else if(fnum1 === fnum2 && fnum2 !== 15){
            fnum2 = fnum2++;
            this.setState({fnum2: fnum2});
        }else{
        this.setState({fnum1: fnum1});
        this.setState({fnum2: fnum2});
        }
     }
    onClickLibrary(){
        let num3 = this.generateRandomNumber(0, 4);
        this.setState({num3: num3});
    }
    render() {
        let {num1, num3, fnum1, fnum2, colorPalette} = this.state
        return (
                 <div className='generarte-section'>
            <center><button onClick={this.refresh} className='refresh btn'>Refresh All <i className='fas fa-sync-alt'></i></button></center>
            <div className='challenge box margin-top'>
                <h3 className='color1 size'>Challenge</h3>
                <p className='p1'>{Challenge[num1].challenge}</p>
                <i onClick={this.onClickChallenge} className="fas fa-sync-alt color1"></i>
            </div>
            <div className='color-pallete box'>
             <h3 className='color2 size'>Color palette</h3>
             <Schemes palette={colorPalette}/>
             <i onClick={this.componentDidMount} className="fas fa-sync-alt color2"></i>
            </div> 
            <div className='font-pairing box'>
                <h3 className='color3 size'>Font pairing</h3>
                <div className='link-div'>
                    <p className='p2'>Click to get font <i className="fas fa-hand-point-down"></i></p>
                    <a href={Fonts[fnum1].fontLink} target='_blanks'><h3 className='font1'>{Fonts[fnum1].fontName}</h3></a>
                    <a href={Fonts[fnum2].fontLink} target='_blanks'><p className='font2'>{Fonts[fnum2].fontName}</p></a>
                </div>
                <i onClick={this.onClickFont} className="fas fa-sync-alt color3"></i>
            </div>
            <div className='illustrations box'>
                <h3 className='color4 size'>Illustrations Library</h3>
                <center className='p1'><h1><a href='/'>{Challenge[num3].library}</a></h1></center>
                <i onClick={this.onClickLibrary} className="fas fa-sync-alt color4"></i>
            </div>
        </div>
        )
    }
}
