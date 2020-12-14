import React, { Component } from 'react';

// ----- import antd depends
import './styles/antd.css';
// ----- import editable-tree depends
import './styles/icon-font/iconfont.css';
import './styles/editable-tree.css';
// ----- import component
import EditableTree from 'editable-tree-antd'
import Footer from '../../footer';


class AntEditableTree extends Component {
    constructor(props){
        super(props);
        this.state={
            treeData:[
                {
                nodeName: '层级1-1 ',
                id: '层级1-1', // unique id, required
                nameEditable: true, // is level editable (name), default true
                valueEditable: true, // is level editable (value), default true
                nodeDeletable: false, // is level deletable, default true
                nodeValue: [
                    {
                    nodeName: '层级二',
                    isInEdit: true, // is level in edit status
                    id: '层级二',
                    nodeValue: [
                        {
                        nodeName: '二级菜单-1-三级-1',
                        id: '二级菜单-1-三级-1',
                        nodeValue: '二级菜单-1-三级-1',
                        },
                        {
                        nodeName: '二级菜单-1-三级-2',
                        id: '二级菜单-1-三级-2',
                        valueEditable: false,
                        nodeValue: '二级菜单-1-三级-2',
                        }]
                    },
                    {
                        nodeName: '菜单二级-2',
                        isInEdit: false, // is level in edit status
                        id: '菜单二级-2',
                        nodeValue: [
                            {
                            nodeName: '3级菜单-2-三级-1',
                            id: '3级菜单-2-三级-1',
                            isInEdit:false,
                            nodeValue: [{
                                nodeName: '4级菜单-1-1',
                                id: '4级菜单-1-1',
                                isInEdit:false,
                                nodeValue: [{
                                    nodeName: '5级菜单-1-1',
                                    id: '5级菜单-1-1',
                                    isInEdit:false,
                                    nodeValue: [{
                                        nodeName: '6三级菜单-1-1',
                                        id: '6级菜单-1-1',
                                        isInEdit:false,
                                        nodeValue: [{
                                            nodeName: '7级菜单-1-1',
                                            id: '7级菜单-1-1',
                                            isInEdit:false,
                                            nodeValue: [{
                                                nodeName: '8级菜单-1-1',
                                                id: '8级菜单-1-1',
                                                isInEdit:false,
                                                nodeValue: [{
                                                    nodeName: '9级菜单-1-1',
                                                    id: '9级菜单-1-1',
                                                    isInEdit:false,
                                                    nodeValue: [{
                                                        nodeName: '10级菜单-1-1',
                                                        id: '10级菜单-1-1',
                                                        isInEdit:true,
                                                        }],
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            },
                            {
                            nodeName: '二级菜单-3-1-1',
                            id: '二级菜单-3-1-1',
                            valueEditable: false,
                            nodeValue: '二级菜单-3-1-1',
                            },
                        ]
                    }
                ],
                },
                {
                    nodeName: '层级1-2',
                    id: '层级1-2', // unique id, required
                    nameEditable: true, // is level editable (name), default true
                    valueEditable: true, // is level editable (value), default true
                    nodeDeletable: false, // is level deletable, default true
                    nodeValue: []
                }
            ]
        }
    }
    render() {
        
        return (
            <div className="container">
                <div className="editable-tree" style={{backgroundColor:"#fff"}}>
                <h4 style={{textAlign:"center",lineHeight:"80px"}}>React antd editable list tree 层级已被限制至多10级</h4>
                    <EditableTree
                    data={this.state.treeData} // see demo data above
                    maxLevel={10} // tree max level limitation, default 50
                    enableYaml={true} // enable parse yaml string, default false
                    // lang="en_US" // default zh_CN
                    onDataChange={this.onDataChange} // data change listener
                    />
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default AntEditableTree;