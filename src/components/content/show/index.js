import React, { Component } from "react";
import axios from 'axios';
import $ from 'jquery';
import Footer from './../../footer';
import "./index.css";
class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities1: ["天津","沈阳","大连","哈尔滨","济南","青岛","南京","上海","杭州","武汉","广州","深圳","香港","澳门","重庆","成都","西安",
      ],
      loading:true,
      cities:['数据加载中'],
      selected_city: ["北京",],
    };
    this.selectCity = this.selectCity.bind(this);
    this.deSelectCity = this.deSelectCity.bind(this);
    this.get = this.get.bind(this)
  }
  get (){
    axios.get('./city.json').then((res)=>{
      console.log(res.data); //resume/public/city.json
      console.log(res.status);
      this.setState({
        cities:res.data
      })
    }).catch((err)=>{
      console.log(err);
    })

    // $.get('./city.json',function (data) {
    //   console.log(data);
    // }).fail((err)=>{
    //   console.log(err);
    // })

  }
  componentDidMount(){
    this.get()
  }
  selectCity(e) {
    e.preventDefault();
    let ind = e.target.getAttribute("index");
    let cities = [...this.state.cities];
    let clicked_city = cities[ind];
    cities.splice(ind, 1);
    this.setState({
      selected_city: [...this.state.selected_city, clicked_city],
      cities: cities,
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
      cities: [...this.state.cities, clicked_city],
    });
  }
  render() {
    return (
      <div className="city-select container">
        <div className="flex">
          <div className="flex-item">
            <h3> 可选城市 </h3>
            <ul>
          
              {this.state.cities.map((item, index) => {
                
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
