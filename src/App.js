import React from "react";
//import logo from "./logo.svg";
import "./App.css";
const check = require("./check");
const dimentions = require("./dimentions");

class TogglePlayDisp extends React.Component {
  render() {
    let gameOverMessage =
      this.props.winner === "" ? "" : this.props.winner + " has won";
    return (
      <div className="play_disp">
        <p className="win_disp">{gameOverMessage}</p>
        <button onClick={this.ToggleDisp}>Play</button>
      </div>
    );
  }
  ToggleDisp = event => {
    this.props.toggleDisp(event);
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    let baseArray = new Array(7);
    baseArray.fill(0);
    baseArray.forEach((elem, i) => {
      baseArray[i] = new Array(7);
      baseArray[i].fill(0);
      baseArray[i].forEach((elem, j) => {
        baseArray[i][j] = [0, 1];
      });
    });

    this.colors = ["white", "black", "red", "yellow"];
    this.checkArr = [];
    this.checkFunctions = [];
    this.state = {
      gameArray: baseArray,
      playerNum: 1,
      errorMessage: "",
      showPlayDisp: true,
      isGameWon: false,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  }
  render() {
    let cols = this.state.gameArray.map((row, index) => {
      return (
        <div
          class="game_row"
          key={index}
          onClick={e => this.AddCircleToRow(e, index)}
        >
          {row.map((elem, i) => {
            return (
              <div class="game_cell" key={i}>
                {this.FillCell(elem, index)}
              </div>
            );
          })}
        </div>
      );
    });
    return (
      <div class="App">
        {this.state.showPlayDisp && (
          <TogglePlayDisp
            toggleDisp={this.ToggleDisp}
            winner={
              this.state.isGameWon ? this.colors[this.state.playerNum] : ""
            }
          />
        )}
        {!this.state.showPlayDisp && (
          <div class="player_disp" color={this.colors[this.state.playerNum]}>
            Player color: {this.colors[this.state.playerNum]}
          </div>
        )}

        <div class="game_display">{cols}</div>

        <div class="errr_display">{this.state.errorMessage}</div>
      </div>
    );
  }
  ToggleDisp = event => {
    let baseArray = new Array(7);
    baseArray.fill(0);
    baseArray.forEach((elem, i) => {
      baseArray[i] = new Array(7);
      baseArray[i].fill(0);
      baseArray[i].forEach((elem, j) => {
        baseArray[i][j] = [0, 1];
      });
    });
    this.setState(state => ({
      showPlayDisp: !state.showPlayDisp,
      gameArray: baseArray
    }));
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    console.log(window.innerWidth, window.innerHeight);
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  };

  FillCell = (elem, col) => {
    let svgDimentions = dimentions.returnDimentions(this.state.windowWidth);
    return (
      <svg width={svgDimentions[0]} height={svgDimentions[0]}>
        <circle
          key={col}
          cx={svgDimentions[1]}
          cy={svgDimentions[1]}
          r={svgDimentions[2]}
          stroke={this.colors[elem[1]]}
          strokeWidth={svgDimentions[3]}
          fill={this.colors[elem[0]]}
        />
      </svg>
    );
  };

  AddCircleToRow = (event, col) => {
    let gameArr = this.state.gameArray;
    let i = 0;
    if (gameArr[col][i][0] !== 0) {
      this.setState({
        errorMessage: "The column is full already"
      });
      return;
    }

    while (gameArr[col][++i] && gameArr[col][i][0] === 0) {}

    gameArr[col][i - 1][0] = this.state.playerNum;
    this.setState(
      state => ({
        gameArray: gameArr,
        playerNum: state.playerNum === 1 ? 2 : 1,
        errorMessage: ""
      }),
      this.CheckForWinning(col, i - 1)
    );
  };

  CheckForWinning = (col, row) => {
    let playerNum = this.state.playerNum;
    let gameArr = this.state.gameArray;
    this.checkFunctions = [
      function() {
        return check.checkHorizontal(gameArr, playerNum, col, row);
      },
      function() {
        return check.checkVertical(gameArr, playerNum, col, row);
      },
      function() {
        return check.checkDiagonalDown(gameArr, playerNum, col, row);
      },
      function() {
        return check.checkDiagonalUp(gameArr, playerNum, col, row);
      }
    ];
    this.checkFunctions.forEach(elem => {
      let a = elem();
      if (a.length >= 4) {
        this.GameEnd(a);
        return;
      }
    });
  };
  GameEnd = a => {
    let gameArr = this.state.gameArray;
    a.forEach(elem => {
      gameArr[elem[0]][elem[1]][1] = 3;
    });
    this.setState(state => ({
      gameArray: gameArr,
      isGameWon: true,
      showPlayDisp: true,
      playerNum: state.playerNum === 1 ? 2 : 1
    }));
  };
}

export default App;
