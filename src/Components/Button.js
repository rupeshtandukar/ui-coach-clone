import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    render() {
        return (
                <button onClick={onclick} className={this.props.Cname}>{this.props.btnname} <i className={this.props.icname}></i></button>
        )
    }
}
