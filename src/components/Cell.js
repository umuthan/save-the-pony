import React, { Component } from 'react';

class Cell extends Component {

  render(){
    const {
      index,
      borders,
      pony,
      domokun,
      end,
      mazeWidth,
      mazeHeight
    } = this.props;

    var borderClass="cell";

    borders.map(function (border) {
      return borderClass = borderClass+' '+border;
    })

    var cellWidth = (100/mazeWidth)+'%';
    var cellHeight = (100/mazeHeight)+'%';

    return(
      <div className={borderClass} style={{width:cellWidth, height:cellHeight}}>
        { Number(index) === Number(pony) ? (
          <img alt="Pony" src={require('../assets/img/pony.gif')} width="100%" height="100%" />
        ) : Number(index) === Number(domokun) ? (
          <img alt="Domokun" src={require('../assets/img/domokun.gif')} width="100%" height="100%" />
        ) : Number(index) === Number(end) ? (
          <img alt="Exit" src={require('../assets/img/exit.gif')} width="100%" height="100%" />
        ) : null }
      </div>
    )
  }

}

export default Cell;
