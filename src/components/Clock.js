import React, { Component } from 'react';

/**
 * 时钟组件 --Clock
 */

export default class Clock extends React.Component{

    /**
     * 构造方法
     * @param props
     */
    constructor(props){
        super(props);
        //初始化state
        this.state={
            date:new Date()
        }
    }

    /**
     * 组件加载完成后操作
     */
    componentDidMount(){
        this.intervalId = window.setInterval(
            ()=>{
                this.tick();
            }
        ,1*1000);
        console.log(this.intervalId);
    }

    /**
     * 卸载组件前操作
     */
    componentWillUnMount(){
        window.clearInterval(this.intervalId);
    }

    /**
     * 更新时间
     */
    tick(){
        this.setState({
            date:new Date()
        });
    }

    render(){
        return (
            <div>
                <p>当前时间为：{this.state.date.getSeconds()}</p>
            </div>
        )
    }
}