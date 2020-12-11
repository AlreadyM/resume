import React, { Component } from "react";
import {Link} from 'react-router-dom';

import Footer from './../../footer';
import "./index.css";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        "天津",
        "沈阳",
        "大连",
        "哈尔滨",
        "济南",
        "青岛",
        "南京",
        "上海",
        "杭州",
        "武汉",
        "广州",
        "深圳",
        "香港",
        "澳门",
        "重庆",
        "成都",
        "西安",
      ],
        selected_city: ["北京",],
    };
    this.selectCity = this.selectCity.bind(this);
    this.deSelectCity = this.deSelectCity.bind(this);
  }
  selectCity(e) {
    e.preventDefault();
    let ind = e.target.getAttribute("index");
    let options = [...this.state.options];
    let clicked_city = options[ind];
    options.splice(ind, 1);
    this.setState({
      selected_city: [...this.state.selected_city, clicked_city],
      options: options,
    });
  }
  deSelectCity(e) {
    e.preventDefault();
    let ind = e.target.getAttribute("index");
    let selected_city = [...this.state.selected_city];
    let clicked_city = selected_city[ind];
    selected_city.splice(ind, 1);
    this.setState({
      selected_city: selected_city,
      options: [...this.state.options, clicked_city],
    });
  }
  render() {
    return (
      <div className="city-select container">
        <div className="flex">
          <div className="flex-item">
            <h3> 可选城市 </h3>
            <ul>
              
              {this.state.options.map((item, index) => {
                return (
                  <li key={index} index={index} onClick={this.selectCity}>
                    
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-item">
            <h3> 已选城市 </h3>
            <ul>
              {this.state.selected_city.map((item, index) => {
                return (
                  <li key={index} index={index} onClick={this.deSelectCity}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Show;
