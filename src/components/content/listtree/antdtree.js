import { Tree } from 'antd'
import React from 'react'
import { EditOutlined } from '@ant-design/icons'

import './index.css'
import Footer from '../../footer'

const { TreeNode } = Tree
class AntdTree extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      listTree: [
        {
          title: '0-0',
          key: '0-0',
          icon: <EditOutlined />,
          children: [
            {
              title: '0-0-0',
              key: '0-0-0',
              children: [
                { title: '0-0-0-0', key: '0-0-0-0' },
                { title: '0-0-0-1', key: '0-0-0-1' },
                { title: '0-0-0-2', key: '0-0-0-2' }
              ]
            },
            {
              title: '0-0-1',
              key: '0-0-1',
              children: [
                { title: '0-0-1-0', key: '0-0-1-0' },
                { title: '0-0-1-1', key: '0-0-1-1' },
                { title: '0-0-1-2', key: '0-0-1-2' }
              ]
            },
            {
              title: '0-0-2',
              key: '0-0-2'
            }
          ]
        },
        {
          title: '0-1',
          key: '0-1',
          children: [
            { title: '0-1-0-0', key: '0-1-0-0' },
            { title: '0-1-0-1', key: '0-1-0-1' },
            { title: '0-1-0-2', key: '0-1-0-2' }
          ]
        },
        {
          title: '0-2',
          key: '0-2'
        }
      ]
    }
    this.changeTitle = this.changeTitle.bind(this)
    this.editSwitch = this.editSwitch.bind(this)
  }

  changeTitle (e) {
    let target = e.target
      ,value = target.value
      ,ind = target.getAttribute('ind')
      ,list = [...this.state.listTree]
    ;
    this.mapData(list, ind, value)
    this.setState({
      listTree: list
    })
  }
  mapData (data, goal, result) {
    if (data !== undefined) {
      data.map((item) => {
        if (item.key === goal) {
          item.title = result
        }else {
          this.mapData(item.children, goal, result) // 深层遍历数据匹配当前对象值
        }
        return ''
      })
    }
  }

  key_enter (e) { // when enter keydown 
    if (e.keyCode === 13) {
      document.querySelectorAll('.editing')[0].setAttribute('class', 'tree-title-custom flex')
    }
  }
  editSwitch (e) { // edit with original javascript 
    e.preventDefault();
    e.stopPropagation();
    let target = e.target.parentNode.parentNode.parentNode
      ,className = target.getAttribute('class')
      ,editing = 'tree-title-custom flex editing'
      ,normal = 'tree-title-custom flex'
    ;
    if (className === 'edit-switch') target = target.parentNode
    if (className === normal) {
      target.setAttribute('class', editing)
    }else if (className === editing) {
      target.setAttribute('class', normal)
    }
  }
  renderChild (data) {
    let context = '';
    if (data !== undefined) {
      context = data.map((item, key) => {
        return (
          <TreeNode title={<div className="tree-title-custom flex">
                   <div className="tree-title-content">
                     <span>{item.title}</span>
                     <input
                       defaultValue={item.title}
                       onChange={this.changeTitle}
                       onKeyDown={this.key_enter}
                       ind={item.key} />
                   </div>
                   <div className="edit-switch" onClick={this.editSwitch}>
                     <EditOutlined style={{fontSize: '20px'}} />
                   </div>
                 </div>} key={item.key}>
            {this.renderChild(item.children)}
            {/* 深层遍历自循环*/}
          </TreeNode>
        )
      })
    }
    return context
  }

  render () {
    return (
      <div class="container" style={{backgroundColor:"#fff"}}>
        <h5 style={{textAlign:"center",padding:"20px 0"}}>选用antd tree</h5>
        <Tree onSelect={this.onSelect} defaultExpandAll={true} style={{width:"300px",paddingBottom:"30px"}}>
          {this.renderChild(this.state.listTree)}
        </Tree>
        <Footer/>
      </div>
    )
  }
}

export default AntdTree
