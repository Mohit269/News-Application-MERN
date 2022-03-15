import React, { Component } from 'react';
import "../styles/header_style.css"
import Navbar from './Navbar';

export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          today:new Date()
        };
      }
      componentDidMount(){
      this.interval =  setInterval(()=>{this.setState({today:new Date()})},1000)
    }
    componentWillUnmount(){
      clearInterval(this.interval);
    }
  render() {
    return (
      < div>
      <div className='heading'>
          <h1 className='heading'>TIMES BULLETIN</h1>
          <h5 className="mt-4">🇮🇳 EDITION &nbsp;|&nbsp;{this.state.today.getDate()+"/"+this.state.today.getMonth()+"/"+this.state.today.getFullYear()}&nbsp;|&nbsp;{this.state.today.getHours()>12?this.state.today.getHours()-12:this.state.today.getHours()}:{this.state.today.getMinutes()<10?"0"+this.state.today.getMinutes():this.state.today.getMinutes()}:{this.state.today.getSeconds()<10?"0"+this.state.today.getSeconds():this.state.today.getSeconds()}&nbsp;{this.state.today.getHours()>11?"PM":"AM"}</h5>
      </div>
      <Navbar/>
      </div>
    )
  }
}
