import React, { Component } from 'react';
import Footer from '../../footer';

import edit from './../../../assets/edit.svg'
import './index.css'

class ListTree extends Component {
    constructor(props){
        super(props)
        this.state = {
            listTree:[
                {
                  title: '0-0',
                  key: '0-0',
                  children: [
                    {
                      title: '0-0-0',
                      key: '0-0-0',
                      children: [
                        { title: '0-0-0-0', key: '0-0-0-0' },
                        { title: '0-0-0-1', key: '0-0-0-1' },
                        { title: '0-0-0-2', key: '0-0-0-2' },
                      ],
                    },
                    {
                      title: '0-0-1',
                      key: '0-0-1',
                      children: [
                        { title: '0-0-1-0', key: '0-0-1-0' },
                        { title: '0-0-1-1', key: '0-0-1-1' },
                        { title: '0-0-1-2', key: '0-0-1-2' },
                      ],
                    },
                    {
                      title: '0-0-2',
                      key: '0-0-2',
                    },
                  ],
                },
                {
                  title: '0-1',
                  key: '0-1',
                  children: [
                    { title: '0-1-0-0', key: '0-1-0-0' },
                    { title: '0-1-0-1', key: '0-1-0-1' },
                    { title: '0-1-0-2', key: '0-1-0-2' },
                  ],
                },
                {
                  title: '0-2',
                  key: '0-2',
                },
              ]
        }
        this.editing = this.editing.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.renderChild = this.renderChild.bind(this)
        this.key_enter      = this.key_enter.bind(this)
    }
    editing(e){
        e.preventDefault();
        let target = e.target
        if(target.tagName === 'IMG'){
            target = target.parentNode.parentNode
        }else{
            target = target.parentNode.parentNode.parentNode
        }
        if(e.target.tagName === 'INPUT') return
        if(target.getAttribute('class') === 'flex'){
            target.setAttribute('class','flex editing')
        }else{
            target.setAttribute('class','flex')
        }
    }
    changeTitle(e){
        e.preventDefault();
        e.stopPropagation();
        let target = e.target
            ,value = target.value
            ,ind = target.getAttribute('ind')
            ,list = [...this.state.listTree]
            ,parentNode = target.parentNode.parentNode.parentNode
        ;
        target.setAttribute('ind',value)
        parentNode.setAttribute('ind',value)
        this.mapData(list,ind,value)
        this.setState({
            listTree:list
        })
    }
    key_enter(e){
        if(e.keyCode === 13){
            document.querySelectorAll('.editing')[0].setAttribute('class','flex')
        }
    }
    mapData(data,goal,result){
        if(data !== undefined){
            data.map((item)=>{
                if(item.title === goal){
                    item.title = result
                }else{
                    this.mapData(item.children,goal,result) // 深层遍历数据匹配当前对象值
                }
                return '';
            })
        }
    }
    renderChild (data){
        let context = ''
            ,arrow = 'arrow'
        if(data !== undefined){
                context = data.map((item,key)=>{
                    if(item.children === undefined) {arrow = ''}
                    return (
                        <div className={"tree " + arrow } key={item.key}>
                            <div className="flex" ind={item.key}>
                                <div className="flex-item"  >
                                    <div className="title">
                                        <div className="title-text" > {item.title} </div>
                                        <input type="text" defaultValue={item.title} onChange={this.changeTitle} ind={item.key}  onKeyDown={this.key_enter}/></div>
                                </div>
                                <div>
                                    <img src={edit} alt="" className="edit" onClick={this.editing}/>
                                </div>
                            </div>
                            {this.renderChild(item.children)} {/* 深层遍历自循环*/ }
                        </div>
                    )
                })
        }
        return context
    }

    render() {
        return (
            <div className="container">
            <h5 style={{textAlign:"center",padding:"20px 0",backgroundColor:"#fff"}}>无框架自建</h5>
                <div className="listtree-module ">
                    <div className="listtree-content">
                        { this.renderChild(this.state.listTree)}
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ListTree;