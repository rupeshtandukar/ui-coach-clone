import React, { Component } from 'react';
import './Button.css';
import './Generate.css';
import Challenge from './Data/Challenge.json';

export default class Generate extends Component {
    constructor(props){
        super(props);

        this.state = this.randomNumber();

        this.refresh = this.refresh.bind(this);
        this.onClickChallenge = this.onClickChallenge.bind(this);
        this.onClickColor = this.onClickColor.bind(this);
        this.onClickFont = this.onClickFont.bind(this);
        this.onClickLibrary = this.onClickLibrary.bind(this);
        this.onClickColor0 = this.onClickColor0.bind(this);
        this.onClickColor1 = this.onClickColor1.bind(this);
        this.onClickColor2 = this.onClickColor2.bind(this);
        this.onClickColor3 = this.onClickColor3.bind(this);
    }
    generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max-min+1)) +min;
    }
    randomNumber() {
        let num1 = this.generateRandomNumber(0, 99);
        let num2 = this.generateRandomNumber(0, 4);
        let num3 = this.generateRandomNumber(0, 4);
        let num4 = this.generateRandomNumber(0, 4);
        let suffle = {
            num1: num1,
            num2: num2,
            num3: num3,
            num4: num4
        }
        return suffle;
    }
    refresh() {
        let num1 = this.generateRandomNumber(0, 99);
        let num2 = this.generateRandomNumber(0, 4);
        let num3 = this.generateRandomNumber(0, 4);
        let num4 = this.generateRandomNumber(0, 4);
        this.setState({num1: num1});
        this.setState({num2: num2});
        this.setState({num3: num3});
        this.setState({num4: num4});
        
    }
    onClickChallenge(){
        let num1 = this.generateRandomNumber(0, 99);
        this.setState({num1: num1});
    }
    onClickColor(){
        let num2 = this.generateRandomNumber(0, 4);
        this.setState({num2: num2});
    }
    onClickFont(){
        let num3 = this.generateRandomNumber(0, 4);
        this.setState({num3: num3});
    }
    onClickLibrary(){
        let num4 = this.generateRandomNumber(0, 4);
        this.setState({num4: num4});
    }
    onClickColor0(){
        prompt('copy to clip board ctrl+c, Enter', `${Challenge[this.state.num2].pallete[0]}`)
    }
    onClickColor1(){
        prompt('copy to clip board ctrl+c, Enter', `${Challenge[this.state.num2].pallete[1]}`)
    }
    onClickColor2(){
        prompt('copy to clip board ctrl+c, Enter', `${Challenge[this.state.num2].pallete[2]}`)
    }
    onClickColor3(){
        prompt('copy to clip board ctrl+c, Enter', `${Challenge[this.state.num2].pallete[3]}`)
    }
    render() {
        return (
                 <div className='generarte-section'>
            <center><button onClick={this.refresh} className='refresh btn'>Refresh All <i className='fas fa-sync-alt'></i></button></center>
            <div className='challenge box margin-top'>
                <h3 className='color1 size'>Challenge</h3>
                <p className='p1'>{Challenge[this.state.num1].challenge}</p>
                <i onClick={this.onClickChallenge} className="fas fa-sync-alt color1"></i>
            </div>
            <div className='color-pallete box'>
                <h3 className='color2 size'>Color pallete</h3>
                <div className='link-div'>
                    <p className='p2'>Click to copy color code <i className="fas fa-hand-point-down"></i></p>
                    <div className='inline-flex'>
                    <div onClick={this.onClickColor0} className="color-picker" style={{
                        backgroundColor: Challenge[this.state.num2].pallete[0],
                        width: '150px',
                        height: '75px'
                    }}></div>
                    <div onClick={this.onClickColor1} className="color-picker" style={{
                        backgroundColor: Challenge[this.state.num2].pallete[1],
                        width: '150px',
                        height: '75px'
                    }}></div>
                    <div onClick={this.onClickColor2} className="color-picker" style={{
                        backgroundColor: Challenge[this.state.num2].pallete[2],
                        width: '150px',
                        height: '75px'
                    }}></div>
                    <div onClick={this.onClickColor3} className="color-picker" style={{
                        backgroundColor: Challenge[this.state.num2].pallete[3],
                        width: '150px',
                        height: '75px'
                    }}></div>
                    </div>
                </div>
                <i onClick={this.onClickColor} className="fas fa-sync-alt color2"></i>
            </div>
            <div className='font-pairing box'>
                <h3 className='color3 size'>Font pairing</h3>
                <div className='link-div'>
                    <p className='p2'>Click to get font <i className="fas fa-hand-point-down"></i></p>
                    <a href={Challenge[this.state.num3].fontLink[0]} target='_blanks'><h3 className='font1'>{Challenge[this.state.num3].fonts[0]}</h3></a>
                    <a href={Challenge[this.state.num3].fontLink[1]} target='_blanks'><p className='font2'>{Challenge[this.state.num3].fonts[1]}</p></a>
                </div>
                <i onClick={this.onClickFont} className="fas fa-sync-alt color3"></i>
            </div>
            <div className='illustrations box'>
                <h3 className='color4 size'>Illustrations Library</h3>
                <center className='p1'><h1><a href='/'>{Challenge[this.state.num4].library}</a></h1></center>
                <i onClick={this.onClickLibrary} className="fas fa-sync-alt color4"></i>
            </div>
        </div>
        )
    }
}
