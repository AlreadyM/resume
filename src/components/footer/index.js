import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        const footerStyle = {
            fontSize:18,
            color:'#5555cd',
            textAlign:'center',
            paddingBottom:50,
        }
        const navlink = {
            margin:'0px 10px',
            fontSize:'1rem'
        }
        const basename = ''
        return (
            <div className="footer" style={footerStyle}>
                <p>本页面使用ReactJS制作以作演示。主要展示内容：路由，组件复用，数据获取与渲染，事件绑定，state触发重绘与基本网页制作。</p>
                <Link className="navlink" style={navlink} to='/' >回到首页</Link>
                <Link className="navlink" style={navlink} to={'/show'}>地址选择</Link>
                <Link className="navlink" style={navlink} to={'/listtree'}>ALi/树状导航 react</Link>
                <Link className="navlink" style={navlink} to={'/AntdTree-ali'}>ALi/树状导航antd tree</Link>
                <Link className="navlink" style={navlink} to={'/anttree-meituan'}>MT/React Ant editabl 树状导航</Link>
                <Link className="navlink" style={navlink} to={'/collection'}>常见问题整理</Link>
            </div>
        );
    }
}

export default Footer;