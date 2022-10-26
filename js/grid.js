const grid = {
  gridTable: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],

  init: function () {
    document
      .querySelectorAll("#game-zone .morpion-box")
      .forEach((box) => box.addEventListener("click", (event) => handleGameClick(event)));
  },

  add: function (row, column, symbol) {
    grid.gridTable[row][column] = symbol;
  },

  isEmpty: function (row, column) {
    if (grid.gridTable[row][column] != null) return false;
    else return true;
  },

  reset: function (row, column, symbol) {
    grid.gridTable = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  },

  hasWon: function (symbol) {
    for (let i = 0; i < 3; i++) {
      // Vérification sur la lige i
      if (grid.gridTable[i] == `${symbol},${symbol},${symbol}`) return true;

      // Vérification sur la colonne i
      if (
        grid.gridTable[0][i] == symbol &&
        grid.gridTable[1][i] == symbol &&
        grid.gridTable[2][i] == symbol
      ) {
        return true;
      }
    }

    // Vérification de la première diagonale
    if (
      grid.gridTable[0][0] == symbol &&
      grid.gridTable[1][1] == symbol &&
      grid.gridTable[2][2] == symbol
    ) {
      return true;
    }

    // Vérification de la seconde diagonale
    if (
      grid.gridTable[0][2] == symbol &&
      grid.gridTable[1][1] == symbol &&
      grid.gridTable[2][0] == symbol
    ) {
      return true;
    }

    return false;
  },
};
