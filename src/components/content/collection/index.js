import React, { Component } from 'react';

import GitPagePublish from './../gitpagepublish';
import Footer from './../../footer';

import './index.css';

class Collection extends Component {
    constructor(props){
        super(props);
        this.state = {
            problem:[
                {
                    name:'绑定方法this指向问题',
                    resolve:'如需继续绑定为当前组件而不是当前方法内的this，可在constructor中明确bind(this)，如this.f = this.f.bind(this)；尽量避免在jsx中绑定避免每次render导致不应当的性能开销'
                },{
                    name:'组件生命周期名称更改',
                    resolve:'因官方对架构的调整，需要注意老版本钩子函数的名称更改问题。'
                },{
                    name:'组件生命周期划分',
                    resolve:'Mounting:挂载（WillMount,DidMount)；Updating:更新(state,props值被改变时触发 ShouldUpdate,WillUpdate,DidUpdate）；Unmounting:组件被卸载的最后一声呼唤。'
                },{
                    name:'数据获取',
                    resolve:'fetch(ios 10.xx with bugs),axios(优选),ajax(tool.js),ajax($)'
                },{
                    name:'jsx区别常规html写法特列',
                    resolve:'class-->className, label for -->htmlfor，本地图片引入 -->先作为对象import后再在src中大括号赋值或直接src=require("xxx")、优选对象引入方式便于webpack判定base64直接压如代码减少http请求优化网络传输'
                },{
                    name:'react-router-dom',
                    resolve:['<browerrouter> 需要服务端更改配置避免404，标准url方便前后端对接路由路径 ',
                            '<hashrouter> 无需服务端特殊配置即可访问，但url带有#号，美观问题以及路径对于后端全为同一地址，不便于具体业务界面渲染。']
                },
            ]
        }
    }
  
    render() {
        return (
            <div className='collection container'>
            {/* 问题收集 */}
                <ol>
                    {this.state.problem.map((item,index)=>{
                        return(
                            <li key={index} index={index}>
                                <h3 className="problem">{item.name}</h3>
                                <div className="resolve">{item.resolve}</div>
                            </li>
                        )
                    })}
                </ol>
                <GitPagePublish/>
                <Footer/>
            </div>
        );
    }
}

export default Collection;