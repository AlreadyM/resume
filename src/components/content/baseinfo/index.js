import React, { Component } from "react";
import InfoModule from "../infomodule";
import './index.css'
import Store from "../../../store";
class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.storeChange = this.storeChange.bind(this)
    Store.subscribe(this.storeChange)
  }

    componentDidMount(){
        const action = {
            type:'contact_number',
            value:`13521760106`
        }
        setTimeout(()=>{
          Store.dispatch(action)
          console.log('use reduce change the state on component mounted')
        },5000)
    }
    storeChange(){
        this.setState(Store.getState())
      }
    timegap () {
        let now = new Date();
        let start = new Date(this.state.work_start_date);
        let month = 11 - (start.getMonth()) + (now.getMonth());
        return now.getFullYear() - start.getFullYear() + (month > 11 ? 1 : 0);
    }

   
  render() {
    return (
      <div className="base-info module-content">
        <InfoModule title="基本信息" />
        <div className="baseinfo-content module-body">
          <div className="flex">
            <div className="  ">
                <div className='baseimfo-text'>{this.state.name}</div>
                <div className='baseimfo-text'>{this.state.sex==='man'?'男':'女'}</div>
                <div className='baseimfo-text'>{this.state.education_background}</div>
                <div className='baseimfo-text'>{this.timegap()}年工作经验</div>
                <div className='baseimfo-text'>{this.state.current_status}</div>
            </div>
            </div>
            <div className="flex">
                <div className='baseimfo-text'>{this.state.contact_number}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default BaseInfo;
