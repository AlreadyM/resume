import React, { Component } from 'react';
import InfoModule from '../infomodule';
import Store from '../../../store';
class WorkExperience extends Component {
   
    render() {
        return (
            <div className='work-experience module-content'>
                <InfoModule title="工作经历"/>
                <div className="work-experience-content module-body">
                    <div className="experience">
                        <div className="flex">
                            <div className="company">北京和沐天成文化传媒有限公司</div>
                            <div className="time">2015.04-2020.07</div>
                        </div>
                        <div className="job">
                            Web前端
                        </div>
                        <div className="job-desc">
                            <div className="job-desc-title">内容</div>
                            <ol>
                                <li>与界面设计师UE设计师对接设计成稿，开发静态展示页面或动态交互页面。
                                </li>
                                <li>与后端（PHP）对接开发数据交换页面。
                                </li>
                                <li>与Android 和IOS 开发团队配合完成网页内嵌入APP的工作，实现产品快速迭代的目的。
                                </li>
                                <li>公司使用SVN管理代码开发过程并配合FTP直接处理无需团队协作的项目快速上线，个人使用Git管理个人代码。
                                </li>
                            </ol>
                            <div className="job-summarize">
                                任职期间主要使用BT样式框架，JQ脚本框架，Layer UI 框架，付费授权框架，Datatable，JQWeUI,etc.处理各项目之间版式一致性，开发规范性；JS原生处理小型化单页面来达到缩减页面体积提升响应速度的目的。因公司项目需要由后端PHP渲染页面并返回给浏览器，未涉及VUE，Angular，React，NodeJS，ElementJS，等时下热门技术，无具体上线项目故无法展示。
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;