import React, { Component } from 'react';

class GitPagePublishGuide extends Component {
    render() {
        return (
            <div className="collection-gh-page GitPagePublishGuide" style={{margin:"20px 0",}} >
                <h5 className="title"> 在github上部署个人react 项目站点</h5>
                <ol className="collection-body">
                    <li>常规新建仓库完成 与线上仓库建立连接完成（即达到可以正常push pull 的地步）</li>
                    <li>npm 安装 gh-pages 使用：npm install gh-pages --save-dev</li>
                    <li>项目package.json --> scripts 对象添加 "predeploy":"npm run build"/"yarn run build","deploy":"gh-pages -d build"</li>
                    <li>本地终端（cmd,terminal) 运行 npm run deploy ，通过之前添加到pakage.json 中的脚本gh-pages 会编译并新建立一个分支 branch -- gh-pages 在github网站远端仓库里面</li>
                    <li>线上仓库管理--> setting --> 最下面 github pages 选择 gh-pages 分支 与路径</li>
                </ol>
                <div>react 的项目一定需要注意项目的pakage.json 中的homepage 配置项，相对路径问题，根目录问题。 "homepage":"/","homepage":__projectName</div>
                <div className="summarize">总结：github pages 会自动读取在对应分支的index.html文件，达到展示个人站点的目的。</div>
            </div>
        );
    }
}

export default GitPagePublishGuide;