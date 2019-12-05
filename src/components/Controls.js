import React, { Component } from 'react';

import { Star, Arrow, Circle, Square } from '../assets/img/Icons';

class Controls extends Component {

  starButton = () => {
    if(this.props.starButtonCallBack) this.props.starButtonCallBack();
  }

  squareButton = () => {
    if(this.props.squareButtonCallBack) this.props.squareButtonCallBack();
  }

  northButton = () => {
    if(this.props.northButtonCallBack) this.props.northButtonCallBack();
  }

  westButton = () => {
    if(this.props.westButtonCallBack) this.props.westButtonCallBack();
  }

  eastButton = () => {
    if(this.props.eastButtonCallBack) this.props.eastButtonCallBack();
  }

  southButton = () => {
    if(this.props.southButtonCallBack) this.props.southButtonCallBack();
  }

  render(){
    return(
      <div id="controls">
        <button id="cross" onClick={this.squareButton}><Square fill="#ffffff" width="12" /></button>
        <button id="star" onClick={this.starButton}><Star fill="#ffffff" width="20" /></button>
        <button id="north" onClick={this.northButton}><Arrow degree="270" fill="#ffffff" width="10" /></button>
        <button id="west" onClick={this.westButton}><Arrow degree="180" fill="#ffffff" width="10" /></button>
        <button id="circle"><Circle fill="#272525" width="12" /></button>
        <button id="east" onClick={this.eastButton}><Arrow fill="#ffffff" width="10" /></button>
        <button id="south" onClick={this.southButton}><Arrow degree="90" fill="#ffffff" width="10" /></button>
      </div>
    )
  }

}

export default Controls ;
