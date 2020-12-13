import React, { Component } from "react";
import InfoModule from "../infomodule";
import './index.css'

class BaseInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "雷春华",
      birthday: "1990-01-06",
      sex: "man",
      education_background: "大专",
      education_endtime: "20120701",
      work_start_date: '2012-08-18',
      current_status: "离职-随时到岗",
      contact_number: "17896057893",
      email: "617054896@qq.com",
    };
  }
    timegap () {
        let now = new Date();
        let start = new Date(this.state.work_start_date);
        let month = 11 - (start.getMonth()) + (now.getMonth());
        return now.getFullYear() - start.getFullYear() + (month > 11 ? 1 : 0);
    }
    componentDidMount(){
        console.log(this.timegap());
    }
  render() {
    return (
      <div className="base-info module-content">
        <InfoModule title="基本信息" />
        <div className="baseinfo-content module-body">
          <div className="flex">
            <div className="">
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
