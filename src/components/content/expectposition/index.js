import React, { Component } from "react";
import InfoModule from "../infomodule";
class ExpectPosition extends Component {
    constructor(props){
        super(props);
        this.state = {
            job_name:'Web 前端',
            desire_money_low:12,
            desire_money_high:15,
            industry:'不限',
            city:'成都'
        }
    }
  render() {
      let data = this.state
      
    return (
      <div className="expect-position module-content">
        <InfoModule title="期望职位" />
        <div className="flex module-body">
          <div className="flex">
            <div className="baseimfo-text">{data.job_name}</div>
            <div className="baseimfo-text">薪资：{data.desire_money_low} - {data.desire_money_high} k</div>
            <div className="baseimfo-text">行业{data.industry}</div>
            <div className="baseimfo-text">城市{data.city}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExpectPosition;
