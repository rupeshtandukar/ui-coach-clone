import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img width={this.props.w} height={this.props.h} alt='images' src={this.props.svgs} />
                <h3 className='card-info'>{this.props.Ititle}</h3>
            </div>
        )
    }
}
