/**
 * Save The Pony - Trustpilot Code Challenge
 * https://github.com/umuthan/save-the-pony
 *
 * Author: Umuthan Uyan
 *
 */

import React, { Component } from 'react';

import { mazeInfo, movePony, apiURL } from '../api/Maze';

import Controls from './Controls';
import Cell from './Cell';

class Maze extends Component {

  /*
  **
  ** Setting the default values for maze.
  **
  */
  state = {
    maze: null,
    pony: 0,
    domokun: 0,
    endPoint: 0,
    mazeWidth: 0,
    mazeHeight: 0
  };

  /*
  **
  ** Update pony direction.
  **
  */
  moveMyPony = (direction) => {
    var directionData = {};
    directionData['direction'] = direction;

    movePony(this.props.mazeID, directionData).then(data => {
      this.updateMaze();
    });
  }

  /*
  **
  ** Update maze after pressing direction buttons.
  **
  */
  updateMaze = () => {
    mazeInfo(this.props.mazeID).then(data => {
      if(data['game-state']['state'].toLowerCase()==='active') {
        this.setState({
          maze: data['data'],
          pony: data['pony'],
          domokun: data['domokun'],
          end: data['end-point'],
          mazeWidth: data['size'][0],
          mazeHeight: data['size'][1]
        });
      } else {
        this.props.notificationUpdateCallback(
          data['game-state']['state-result'],
          apiURL+data['game-state']['hidden-url'],
          data['game-state']['state'],
        )
      }
    })
  }

  /*
  **
  ** Quit maze when pressing square button.
  **
  */
  quitMaze = () => {
    this.props.notificationUpdateCallback(
      "Pony not be saved!\n Are you sure?",
      null,
      "active",
    )
  }

  /*
  **
  ** Update maze after createMaze function.
  **
  */
  componentDidMount() {
    this.updateMaze();
  }

  render(){
    const {
      maze,
      pony,
      domokun,
      end,
      mazeWidth,
      mazeHeight
    } = this.state;

    return(
      <div>
        <div id="screen">
          { maze ? (
            <div id="maze">
              { maze.map((cellBorders, index) => (
                <Cell
                  key={index}
                  index={index}
                  borders={cellBorders}
                  pony={pony}
                  domokun={domokun}
                  end={end}
                  mazeWidth={mazeWidth}
                  mazeHeight={mazeHeight}
                />
              )) }
            </div>
          ) : null }
        </div>
        <Controls
          northButtonCallBack={() => this.moveMyPony('north')}
          westButtonCallBack={() => this.moveMyPony('west')}
          eastButtonCallBack={() => this.moveMyPony('east')}
          southButtonCallBack={() => this.moveMyPony('south')}
          squareButtonCallBack={() => this.quitMaze()}
        />
      </div>
    )

  }

}

export default Maze;
