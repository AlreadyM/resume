import React, { Component } from 'react';
import InfoModule from '../infomodule';
class Advantage extends Component {
    render() {
        return (
            <div className='advantage module-content'>
                <InfoModule title="优势"/>
                <div className="advantage-content module-body">
                    多年独立网页开发，与后端协作开发，与IOS Android 团队协作开发经验。自学能力强，能较快上手新框架编写模式规范。对在线交易有一定涉猎，曾自主使用nodejs构建服务获取huobi.pro okex 数据使用talib进行分析，构建识别信号。
                </div>
            </div>
        );
    }
}

export default Advantage;