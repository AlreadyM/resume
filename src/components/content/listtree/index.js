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
              ,editing:false
        }

        this.editing = this.editing.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.renderChild = this.renderChild.bind(this)
        this.key_enter      = this.key_enter.bind(this)
    }
    editing(e){
        e.preventDefault();
        if(e.target.tagName === 'INPUT'){
            return
        }
        if(this.state.editing){
            this.setState({
                editing:false
            })
            return 
        }
        this.setState({
            editing:true
        })
    }
    changeTitle(e){
        e.preventDefault();
        e.stopPropagation();
        let target = e.target
            ,value = target.value
            ,ind = target.getAttribute('ind')
        let list = [...this.state.listTree]
        target.setAttribute('ind',value)
        this.mapData(list,ind,value)
        this.setState({
            listTree:list
        })
    }
    key_enter(e){
        if(e.keyCode === 13){
            this.setState({
                editing:false
            })
        }
    }
    mapData(data,goal,result){
        if(data !== undefined){
            data.map((item)=>{
                if(item.title === goal){
                    item.title = result
                }else{
                    this.mapData(item.children,goal,result)
                }
                return '';
            })
        }
    }
    renderChild (data){
        let context = ''
            ,arrow = 'arrow'
        const inputstyle ={
            display:this.state.editing ? 'block' : 'none'
        }
        if(data !== undefined){
                context = data.map((item,key)=>{
                    if(item.children === undefined) {arrow = ''}
                    return (
                        <div className={"tree " + arrow }key={item.key}>
                            <div className={"flex"}>
                                <div className="flex-item" onClick={this.editing} >
                                    <div className="title">{item.title}<input type="text" defaultValue={item.title} onChange={this.changeTitle} ind={item.key} style={inputstyle} onKeyDown={this.key_enter}/></div>
                                </div>
                                <div>
                                    <img src={edit} alt="" className="edit" onClick={this.editing}/>
                                </div>
                            </div>
                            {this.renderChild(item.children)}
                        </div>
                    )
                })
        }
        return context
    }

    render() {
        return (
            <div className="container">
                <div className="listtree ">
                { this.renderChild(this.state.listTree)}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default ListTree;