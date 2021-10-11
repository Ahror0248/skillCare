import React, { Component } from 'react'
import { Con, Rasm, Titlee } from './style'

export default class index extends Component {
    render() {
        return (


            <Con>

            <Rasm src={this.props.icon}></Rasm>
<Titlee>{this.props.title}</Titlee>
{/* <Text1>{this.props.text}</Text1> */}

            </Con>
        )
    }
}
