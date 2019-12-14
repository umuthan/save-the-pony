import React, { Component } from 'react';

import { Star, Square } from '../assets/img/Icons';

import Controls from './Controls';

class Notification extends Component {

  /*
  **
  ** Remove the maze ID from url to show start screen to play again.
  **
  */
  playAgain = () => {
    window.location.href = '?maze=';
  }

  /*
  **
  ** Return the maze to save the pony after pressing square button.
  **
  */
  returnToMaze = () => {
    window.location.href = '?maze='+this.props.mazeID;
  }

  render(){

    const {
      text,
      image,
      state
    } = this.props;

    return(
      <div>
        <div id="screen">
          <div className="center">
            <h1>{text.replace('.','\n')}</h1>
              { image ? (
                <img alt={text} src={image} />
              ) : null }
            { state !== 'active' ? (
              <p className="bottom animation blink">PRESS <Star fill="#434244" width="15" /> TO PLAY AGAIN!</p>
            ) : (
              <div className="bottom">
                <p className="animation blink">PRESS <Star fill="#434244" width="15" /> TO START OVER!</p>
                <p className="animation blink">PRESS <Square fill="#434244" width="15" /> TO RETURN MAZE!</p>
              </div>
            )}
          </div>
        </div>
        <Controls
          starButtonCallBack={() => this.playAgain()}
          squareButtonCallBack={() => this.returnToMaze()} />
      </div>
    )
  }

}

export default Notification
