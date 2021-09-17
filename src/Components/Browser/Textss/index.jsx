import React, { Component } from 'react'
import { Rasim2, Text12 } from './style'

export default class index extends Component {
    render() {
        return (
            <div>

<Rasim2  src={this.props.icon}></Rasim2>
           <Text12>{this.props.text}</Text12>
           
           </div>
        )
    }
}
