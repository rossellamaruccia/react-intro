import './App.css'
import { Component } from 'react'

class NewImage extends Component {
    render() {
        return (
            <img src = {this.props.source}></img>
        )
    }
}

export default NewImage