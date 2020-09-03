let checkVertical = (gameArray, playerNum, col, row) => {
  let i = 1;
  let rightEnd = false;
  let leftEnd = false;
  let winArr = [[col, row]];
  while (i < 7) {
    if (!leftEnd && row + i < 7 && gameArray[col][row + i][0] === playerNum) {
      winArr.push([col, row + i]);
    } else leftEnd = true;
    if (!rightEnd && row - i >= 0 && gameArray[col][row - i][0] === playerNum) {
      winArr.push([col, row - i]);
    } else rightEnd = true;
    i++;
  }
  return winArr;
};
let checkHorizontal = (gameArray, playerNum, col, row) => {
  let i = 1;
  let rightEnd = false;
  let leftEnd = false;
  let winArr = [[col, row]];
  while (i < 7) {
    if (!leftEnd && col + i < 7 && gameArray[col + i][row][0] === playerNum) {
      winArr.push([col + i, row]);
    } else leftEnd = true;
    if (!rightEnd && col - i >= 0 && gameArray[col - i][row][0] === playerNum) {
      winArr.push([col - i, row]);
    } else rightEnd = true;
    i++;
  }
  return winArr;
};
let checkDiagonalDown = (gameArray, playerNum, col, row) => {
  let i = 1;
  let rightEnd = false;
  let leftEnd = false;
  let winArr = [[col, row]];
  while (i < 7) {
    if (
      !leftEnd &&
      col + i < 7 &&
      row + i < 7 &&
      gameArray[col + i][row + i][0] === playerNum
    ) {
      winArr.push([col + i, row + i]);
    } else leftEnd = true;
    if (
      !rightEnd &&
      col - i >= 0 &&
      row - i >= 0 &&
      gameArray[col - i][row - i][0] === playerNum
    ) {
      winArr.push([col - i, row - i]);
    } else rightEnd = true;
    i++;
  }
  return winArr;
};
let checkDiagonalUp = (gameArray, playerNum, col, row) => {
  let i = 1;
  let rightEnd,
    leftEnd = false;
  let winArr = [[col, row]];
  while (i < 7) {
    if (
      !leftEnd &&
      col + i < 7 &&
      row - i >= 0 &&
      gameArray[col + i][row - i][0] === playerNum
    ) {
      winArr.push([col + i, row - i]);
    } else leftEnd = true;
    if (
      !rightEnd &&
      col - i >= 0 &&
      row + i < 7 &&
      gameArray[col - i][row + i][0] === playerNum
    ) {
      winArr.push([col - i, row + i]);
    } else rightEnd = true;
    i++;
  }
  return winArr;
};
let funcArr = {
  checkVertical,
  checkDiagonalUp,
  checkDiagonalDown,
  checkHorizontal
};
module.exports = funcArr;
