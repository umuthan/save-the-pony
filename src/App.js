import React, { Component } from 'react';

import './assets/App.scss';

import Start from './components/Start';
import Maze from './components/Maze';
import Notification from './components/Notification';

import { createMaze } from './api/Maze';

class App extends Component {

  state = {
    mazeID: 0,
    mazeHeight: 0,
    mazeWidth: 0,
    playerName: null,
    difficulty: 0,
    notificationText : null,
    notificationImage: null
  };

  createMaze = (data) => {
    createMaze(data).then( data => {
      if(data.maze_id) {
        this.setState({
          mazeID : data.maze_id,
          notificationText : null,
          notificationImage: null
        });
        window.location.href = '?maze='+this.state.mazeID;
      } else {
        this.notificationUpdate('Only ponies can play','');
      }
    });
  }

  notificationUpdate = (text,background,state) => {
    this.setState({
      notificationText: text,
      notificationImage: background,
      mazeState: state
    })
  }

  render(){
    const mazeID = new URL(window.location.href).searchParams.get('maze');

    const {
      notificationText,
      notificationImage,
      mazeState
    } = this.state;

    return (
      <div id="console">
        { notificationText ? (
          <Notification text={notificationText} image={notificationImage} mazeID={mazeID} state={mazeState} />
        ) : mazeID ? (
          <Maze mazeID={mazeID} notificationUpdateCallback={this.notificationUpdate} />
        ) : (
          <Start createMazeCallback={this.createMaze} />
        )}
      </div>
    );
  }
}

export default App;
