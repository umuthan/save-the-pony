import React, { Component } from 'react';

import Controls from './Controls';
import Pony from '../assets/img/ponies/Pony';

import { Star, Arrow, Difficulty, MazeLoading } from '../assets/img/Icons';

class Start extends Component {

  state = {
    stage: 'home',
    animate: true,
    mazeHeightValues: [15,16,17,18,19,20,21,22,23,24,25],
    mazeHeight: 15,
    mazeWidthValues: [15,16,17,18,19,20,21,22,23,24,25],
    mazeWidth: 15,
    playerValues: ['Twilight Sparkle','Rarity','Rainbow Dash','Pinkie Pie','Fluttershy'],
    player: 'Twilight Sparkle',
    difficultyValues: [0,1,2,3,4,5,6,7,8,9,10],
    difficulty: 0
  };

  changeStage = () => {
    var newStage = 'home';
    var currentStage = this.state.stage;
    if(currentStage === 'home') {
      newStage = 'mazeHeight';
    } else if(currentStage === 'mazeHeight') {
      newStage = 'mazeWidth';
    } else if(currentStage === 'mazeWidth') {
      newStage = 'player';
    } else if(currentStage === 'player') {
      newStage = 'difficulty';
    } else {
      newStage = 'loading';
      this.createMaze();
    }
    this.setState({
      stage: newStage,
      animate: false
    });
  }

  createMaze = () => {
    const data = {
      'maze-height'     : this.state.mazeHeight,
      'maze-width'      : this.state.mazeWidth,
      'maze-player-name': this.state.player,
      'difficulty'      : this.state.difficulty
    }

    this.props.createMazeCallback(data);
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.stage !== this.state.stage) {
      setTimeout(() => {
        this.setState({ animate: true });
      }, 50);
    }
  }

  changeSetting = (status) => {
    var currentStage = this.state.stage;

    if(currentStage !== 'home') {
      var currentValueArray = this.state[currentStage+'Values'];
      var currentValueIndex = currentValueArray.indexOf(this.state[currentStage]);
      var nextValueIndex = currentValueIndex;

      if(status === 'up' && nextValueIndex !== currentValueArray.length-1) nextValueIndex++;
      else if(status === 'down' && nextValueIndex !== 0) nextValueIndex--;

      this.setState({
        [currentStage]: this.state[currentStage+'Values'][nextValueIndex]
      });
    }

  }

  render() {
    const {
      stage,
      animate,
      mazeHeight,
      mazeWidth,
      player,
      difficulty
    } = this.state;

    const mazeOptions = [];
    const difficultyOptions = [];

    for (var i=15;i<=25;i++) {
      mazeOptions.push(<option key={i} value={i}>{i}</option>)
    }

    for (var j=0;j<=10;j++) {
      difficultyOptions.push(<option key={j} value={j}>{j}</option>)
    }

    return(
      <div>
        <div id="screen">
        { stage === 'home' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <img alt="Help Save The Pony! Logo" src={require('../assets/img/help-save-the-pony.gif')} />
            <p className="bottom animation blink">PRESS <Star fill="#434244" width="15" /> TO PLAY!</p>
          </div>
        ) : stage === 'mazeHeight' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <h2>Maze Height</h2>
            <h3>{mazeHeight}</h3>
            <div className="bottom">
              <p className="animation blink">SELECT BY USING <Arrow degree="180" fill="#434244" width="10" /> <Arrow fill="#434244" width="10" /></p>
              <p className="animation blink">THEN PRESS <Star fill="#434244" width="15" />!</p>
            </div>
          </div>
        ) : stage === 'mazeWidth' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <h2>Maze Width</h2>
            <h3>{mazeWidth}</h3>
            <div className="bottom">
              <p className="animation blink">SELECT BY USING <Arrow degree="180" fill="#434244" width="10" /> <Arrow fill="#434244" width="10" /></p>
              <p className="animation blink">THEN PRESS <Star fill="#434244" width="15" />!</p>
            </div>
          </div>
        ) : stage === 'player' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <h2>Select Pony</h2>
            <Pony name={player} />
            <h4>{player}</h4>
            <div className="bottom">
              <p className="animation blink">SELECT BY USING <Arrow degree="180" fill="#434244" width="10" /> <Arrow fill="#434244" width="10" /></p>
              <p className="animation blink">THEN PRESS <Star fill="#434244" width="15" />!</p>
            </div>
          </div>
        ) : stage === 'difficulty' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <h2>Diffuculty</h2>
            <Difficulty width="210" fill="#434244" level={difficulty} />
            <div className="bottom">
              <p className="animation blink">SELECT BY USING <Arrow degree="180" fill="#434244" width="10" /> <Arrow fill="#434244" width="10" /></p>
              <p className="animation blink">THEN PRESS <Star fill="#434244" width="15" />!</p>
            </div>
          </div>
        ) : stage === 'loading' ? (
          <div className={animate ? 'animation center fadeIn' : 'animation center'}>
            <h2>Loading...</h2>
            <MazeLoading stroke="#434244" strokeWidth="0.5" width="220" fill="none" className="animation draw" />
            <p class="bottom">Please wait...</p>
          </div>
        ) : null }
        </div>
        <Controls
          eastButtonCallBack={() => this.changeSetting('up')}
          westButtonCallBack={() => this.changeSetting('down')}
          starButtonCallBack={() => this.changeStage() } />
      </div>
    );
  }

}

export default Start;
