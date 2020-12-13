import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        const footerStyle = {
            fontSize:18,
            color:'#5555cd',
            textAlign:'center',
            paddingBottom:50
        }
        const navlink = {
            margin:'0px 10px'
        }
        return (
            <div className="footer" style={footerStyle}>
                <p>本页面使用ReactJS制作以作演示。主要展示内容：路由，组件复用，事件绑定，state触发重绘与基本网页制作。</p>

                <Link className="navlink" style={navlink} to='/resume' >回到首页</Link>
                <Link className="navlink" style={navlink} to={'/resume/show'}>地址选择展示</Link>
                <Link className="navlink" style={navlink} to={'/resume/collection'}>常见问题整理</Link>
            </div>
        );
    }
}

export default Footer;