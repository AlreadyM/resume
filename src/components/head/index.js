import './index.css'
import React, { Component } from 'react';
// const $ = require('jquery')

class Head extends Component {
    render() {
        return (
                <div className="head">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" >
                            简历查看
                        </a>
                    </nav>
                </div>
            );
        }
    }
    
    export default Head;