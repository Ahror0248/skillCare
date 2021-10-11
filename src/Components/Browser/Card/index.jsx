import React, { Component } from 'react'
import { CardImg, CardTitle, CardWrapper } from './style'
export default class index extends Component {
    render() {
        return (
        <CardWrapper>
            {/* <img src={this.props.icon} alt=''/> */}
            <CardImg  src= {this.props.icon}/>
            <CardTitle  >{this.props.title} </CardTitle>
        
        </CardWrapper>
       
        )
    }
}
