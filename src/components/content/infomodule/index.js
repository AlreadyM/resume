import React, { Component } from 'react';
import './index.css';

class InfoModule extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'基本框体'
        }
    }
    render() {
        let style={
            paddingBottom:'16px'
        }
        return (
                <div className="modlue-title" style={style}>{this.props.title?this.props.title:this.state.title}</div>
        );
    }
}

export default InfoModule;