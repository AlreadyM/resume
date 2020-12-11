import './content.css'
import React, { Component } from 'react';

import BaseInfo from './baseinfo';
import ExpectPosition from './expectposition';
import Advantage from './advantage';
import WorkExperience from './workexperience';
class Content extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="content">
                <BaseInfo/>
                <Advantage/>
                <ExpectPosition/>
                <WorkExperience/>
            </div>
        );
    }
}

export default Content;